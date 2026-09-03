/**
 * Islamic Inheritance (Miras / 'Ilm al-Fara'id) Engine.
 * Implements Shariah distribution principles based on Quran (Surah An-Nisa 4:11-12, 4:176) and authentic Sunnah.
 */

export interface EstateDeductions {
  totalGrossEstate: number;
  funeralExpenses: number;
  debtsOwed: number;
  wasiyyahBequests: number; // Max 1/3 of net after funeral and debt
}

export interface FamilyHeirs {
  deceasedGender: "male" | "female";
  hasSpouse: boolean;
  wifeCount: number; // 1 to 4 if deceased is male
  fatherAlive: boolean;
  motherAlive: boolean;
  sonsCount: number;
  daughtersCount: number;
  fullBrothersCount: number;
  fullSistersCount: number;
}

export interface HeirShare {
  relation: string;
  relationArabic: string;
  count: number;
  fractionText: string;
  fractionDecimal: number;
  percentage: number;
  totalAmountForGroup: number;
  amountPerPerson: number;
  quranicBasis: string;
}

export interface InheritanceCalculationResult {
  grossEstate: number;
  totalDeductions: number;
  netDistributableEstate: number;
  wasiyyahCappedAmount: number;
  isWasiyyahExceeded: boolean;
  heirShares: HeirShare[];
  totalDistributedPercentage: number;
  hasResidueLeft: boolean;
  residueAmount: number;
  notes: string[];
}

export const DEFAULT_ESTATE: EstateDeductions = {
  totalGrossEstate: 100000,
  funeralExpenses: 2000,
  debtsOwed: 3000,
  wasiyyahBequests: 0,
};

export const DEFAULT_HEIRS: FamilyHeirs = {
  deceasedGender: "male",
  hasSpouse: true,
  wifeCount: 1,
  fatherAlive: true,
  motherAlive: true,
  sonsCount: 1,
  daughtersCount: 2,
  fullBrothersCount: 0,
  fullSistersCount: 0,
};

export function calculateIslamicInheritance(
  estate: EstateDeductions,
  heirs: FamilyHeirs
): InheritanceCalculationResult {
  const gross = Math.max(estate.totalGrossEstate || 0, 0);
  const funeral = Math.max(estate.funeralExpenses || 0, 0);
  const debts = Math.max(estate.debtsOwed || 0, 0);

  // Step 1: Deduct funeral & debts first
  const estateAfterDebts = Math.max(gross - funeral - debts, 0);

  // Step 2: Wasiyyah (Bequest) - Shariah limit is maximum 1/3 of remaining
  const maxWasiyyahAllowed = estateAfterDebts / 3;
  let requestedWasiyyah = Math.max(estate.wasiyyahBequests || 0, 0);
  let isWasiyyahExceeded = false;
  let wasiyyahCappedAmount = requestedWasiyyah;

  if (requestedWasiyyah > maxWasiyyahAllowed) {
    isWasiyyahExceeded = true;
    wasiyyahCappedAmount = maxWasiyyahAllowed;
  }

  const netDistributableEstate = Math.max(estateAfterDebts - wasiyyahCappedAmount, 0);
  const totalDeductions = funeral + debts + wasiyyahCappedAmount;

  if (netDistributableEstate <= 0) {
    return {
      grossEstate: gross,
      totalDeductions,
      netDistributableEstate: 0,
      wasiyyahCappedAmount,
      isWasiyyahExceeded,
      heirShares: [],
      totalDistributedPercentage: 0,
      hasResidueLeft: false,
      residueAmount: 0,
      notes: ["Total debts, funeral expenses, and bequests exceeded or equaled the total gross estate."],
    };
  }

  const hasChildren = heirs.sonsCount > 0 || heirs.daughtersCount > 0;
  const hasMultipleSiblings = heirs.fullBrothersCount + heirs.fullSistersCount > 1;

  const rawShares: {
    relation: string;
    relationArabic: string;
    count: number;
    fraction: number;
    fractionText: string;
    quranicBasis: string;
    isResiduary?: boolean;
  }[] = [];

  const notes: string[] = [];

  // 1. Spouse Share
  if (heirs.hasSpouse) {
    if (heirs.deceasedGender === "female") {
      // Surviving Husband
      if (hasChildren) {
        rawShares.push({
          relation: "Surviving Husband",
          relationArabic: "الزَّوْج",
          count: 1,
          fraction: 1 / 4,
          fractionText: "1/4 (25%)",
          quranicBasis: "Surah An-Nisa 4:12 (Husband receives 1/4 when children exist)",
        });
      } else {
        rawShares.push({
          relation: "Surviving Husband",
          relationArabic: "الزَّوْج",
          count: 1,
          fraction: 1 / 2,
          fractionText: "1/2 (50%)",
          quranicBasis: "Surah An-Nisa 4:12 (Husband receives 1/2 when no children exist)",
        });
      }
    } else {
      // Surviving Wife / Wives
      const wives = Math.min(Math.max(heirs.wifeCount || 1, 1), 4);
      if (hasChildren) {
        rawShares.push({
          relation: `Surviving Wife (${wives})`,
          relationArabic: "الزَّوْجَة",
          count: wives,
          fraction: 1 / 8,
          fractionText: "1/8 (12.5%) shared",
          quranicBasis: "Surah An-Nisa 4:12 (Wives share 1/8 when children exist)",
        });
      } else {
        rawShares.push({
          relation: `Surviving Wife (${wives})`,
          relationArabic: "الزَّوْجَة",
          count: wives,
          fraction: 1 / 4,
          fractionText: "1/4 (25%) shared",
          quranicBasis: "Surah An-Nisa 4:12 (Wives share 1/4 when no children exist)",
        });
      }
    }
  }

  // 2. Mother Share
  if (heirs.motherAlive) {
    if (hasChildren || hasMultipleSiblings) {
      rawShares.push({
        relation: "Mother",
        relationArabic: "الأُمّ",
        count: 1,
        fraction: 1 / 6,
        fractionText: "1/6 (16.67%)",
        quranicBasis: "Surah An-Nisa 4:11 (Mother receives 1/6 when children or multiple siblings exist)",
      });
    } else {
      rawShares.push({
        relation: "Mother",
        relationArabic: "الأُمّ",
        count: 1,
        fraction: 1 / 3,
        fractionText: "1/3 (33.33%)",
        quranicBasis: "Surah An-Nisa 4:11 (Mother receives 1/3 when no children/multiple siblings exist)",
      });
    }
  }

  // 3. Father Share (Fixed portion if children exist)
  if (heirs.fatherAlive) {
    if (heirs.sonsCount > 0) {
      // Sons exist: Father gets fixed 1/6 only (sons are primary residuary)
      rawShares.push({
        relation: "Father",
        relationArabic: "الأَب",
        count: 1,
        fraction: 1 / 6,
        fractionText: "1/6 (16.67%)",
        quranicBasis: "Surah An-Nisa 4:11 (Father receives 1/6 as fixed Quranic share when sons exist)",
      });
    } else if (heirs.daughtersCount > 0 && heirs.sonsCount === 0) {
      // Only daughters exist: Father gets 1/6 fixed + residue after daughters
      rawShares.push({
        relation: "Father (Fixed + Residuary)",
        relationArabic: "الأَب (فرضاً وتعصيباً)",
        count: 1,
        fraction: 1 / 6,
        fractionText: "1/6 + Residue",
        quranicBasis: "Surah An-Nisa 4:11 & Sunnah (1/6 fixed plus any remaining residue)",
      });
    } else if (!hasChildren) {
      // No children: Father is prime residuary ('Asabah)
      rawShares.push({
        relation: "Father (Primary Residuary)",
        relationArabic: "الأَب (عَصَبَة)",
        count: 1,
        fraction: 0,
        fractionText: "Residue ('Asabah)",
        quranicBasis: "Hadith: 'Give the fixed shares to those entitled, what remains goes to nearest male'",
        isResiduary: true,
      });
    }
  }

  // 4. Daughters Share (Fixed if NO Sons exist)
  if (heirs.daughtersCount > 0 && heirs.sonsCount === 0) {
    if (heirs.daughtersCount === 1) {
      rawShares.push({
        relation: "Daughter (1)",
        relationArabic: "البِنْت",
        count: 1,
        fraction: 1 / 2,
        fractionText: "1/2 (50%)",
        quranicBasis: "Surah An-Nisa 4:11 (Single daughter receives 1/2)",
      });
    } else {
      rawShares.push({
        relation: `Daughters (${heirs.daughtersCount})`,
        relationArabic: "البَنَات",
        count: heirs.daughtersCount,
        fraction: 2 / 3,
        fractionText: "2/3 (66.67%) shared",
        quranicBasis: "Surah An-Nisa 4:11 (Multiple daughters share 2/3 equally)",
      });
    }
  }

  // Sum fixed fractions (excluding residuary)
  const fixedFractionsSum = rawShares.reduce((acc, s) => acc + (s.isResiduary ? 0 : s.fraction), 0);
  let remainingForResidue = Math.max(1 - fixedFractionsSum, 0);

  // Check Awl (Deficit where sum > 1)
  let awlDivisor = 1;
  if (fixedFractionsSum > 1.0001 && heirs.sonsCount === 0) {
    awlDivisor = fixedFractionsSum;
    notes.push(
      `'Awl principle applied: The sum of Quranic fixed shares (${(fixedFractionsSum * 100).toFixed(
        1
      )}%) exceeded 100%. All fixed shares have been proportionally adjusted without excluding any Quranic heir, as instituted by Umar ibn al-Khattab (RA).`
    );
  }

  // 5. Sons & Daughters Residuary Distribution (2:1 Ratio)
  const heirShares: HeirShare[] = [];

  // Add fixed heirs first
  for (const s of rawShares) {
    if (s.isResiduary) continue;
    const adjustedFraction = s.fraction / awlDivisor;
    const totalAmount = netDistributableEstate * adjustedFraction;
    const amountPerPerson = s.count > 0 ? totalAmount / s.count : totalAmount;

    heirShares.push({
      relation: s.relation,
      relationArabic: s.relationArabic,
      count: s.count,
      fractionText: awlDivisor > 1 ? `${s.fractionText} (Adj)` : s.fractionText,
      fractionDecimal: adjustedFraction,
      percentage: Math.round(adjustedFraction * 10000) / 100,
      totalAmountForGroup: totalAmount,
      amountPerPerson,
      quranicBasis: s.quranicBasis,
    });
  }

  // Distribute Residue to Children (Sons & Daughters) or Father
  if (heirs.sonsCount > 0) {
    // Total portions: Each son = 2 portions, each daughter = 1 portion
    const totalChildPortions = heirs.sonsCount * 2 + heirs.daughtersCount * 1;
    const singlePortionFraction = remainingForResidue / totalChildPortions;

    // Sons share
    const sonsFraction = singlePortionFraction * 2 * heirs.sonsCount;
    const totalSonsAmount = netDistributableEstate * sonsFraction;
    heirShares.push({
      relation: `Sons (${heirs.sonsCount})`,
      relationArabic: "الأَبْنَاء",
      count: heirs.sonsCount,
      fractionText: `${(sonsFraction * 100).toFixed(1)}% (2 shares/son)`,
      fractionDecimal: sonsFraction,
      percentage: Math.round(sonsFraction * 10000) / 100,
      totalAmountForGroup: totalSonsAmount,
      amountPerPerson: heirs.sonsCount > 0 ? totalSonsAmount / heirs.sonsCount : 0,
      quranicBasis:
        "Surah An-Nisa 4:11 (Allah instructs you concerning your children: for the male, what is equal to the share of two females)",
    });

    // Daughters share (if any with sons)
    if (heirs.daughtersCount > 0) {
      const daughtersFraction = singlePortionFraction * 1 * heirs.daughtersCount;
      const totalDaughtersAmount = netDistributableEstate * daughtersFraction;
      heirShares.push({
        relation: `Daughters (${heirs.daughtersCount})`,
        relationArabic: "البَنَات",
        count: heirs.daughtersCount,
        fractionText: `${(daughtersFraction * 100).toFixed(1)}% (1 share/daughter)`,
        fractionDecimal: daughtersFraction,
        percentage: Math.round(daughtersFraction * 10000) / 100,
        totalAmountForGroup: totalDaughtersAmount,
        amountPerPerson: heirs.daughtersCount > 0 ? totalDaughtersAmount / heirs.daughtersCount : 0,
        quranicBasis: "Surah An-Nisa 4:11 (Inherits residue alongside brothers in 1:2 ratio)",
      });
    }
    remainingForResidue = 0;
  } else if (heirs.fatherAlive && remainingForResidue > 0.0001) {
    // Father takes residue
    const fatherResidueAmount = netDistributableEstate * remainingForResidue;
    const existingFatherIndex = heirShares.findIndex((h) => h.relation.includes("Father"));
    if (existingFatherIndex >= 0) {
      // Update existing father share
      const existing = heirShares[existingFatherIndex];
      const combinedFraction = existing.fractionDecimal + remainingForResidue;
      const combinedAmount = existing.totalAmountForGroup + fatherResidueAmount;
      heirShares[existingFatherIndex] = {
        ...existing,
        relation: "Father (1/6 Fixed + Residue)",
        fractionText: `${(combinedFraction * 100).toFixed(1)}%`,
        fractionDecimal: combinedFraction,
        percentage: Math.round(combinedFraction * 10000) / 100,
        totalAmountForGroup: combinedAmount,
        amountPerPerson: combinedAmount,
      };
    } else {
      heirShares.push({
        relation: "Father (Residuary)",
        relationArabic: "الأَب",
        count: 1,
        fractionText: "Full Residue",
        fractionDecimal: remainingForResidue,
        percentage: Math.round(remainingForResidue * 10000) / 100,
        totalAmountForGroup: fatherResidueAmount,
        amountPerPerson: fatherResidueAmount,
        quranicBasis: "Nearest male relative takes the residue (Sahih al-Bukhari)",
      });
    }
    remainingForResidue = 0;
  }

  // Total Distributed Percentage
  const totalDistributedPercentage = heirShares.reduce((acc, h) => acc + h.percentage, 0);

  return {
    grossEstate: gross,
    totalDeductions,
    netDistributableEstate,
    wasiyyahCappedAmount,
    isWasiyyahExceeded,
    heirShares,
    totalDistributedPercentage: Math.round(totalDistributedPercentage * 100) / 100,
    hasResidueLeft: remainingForResidue > 0.01,
    residueAmount: netDistributableEstate * remainingForResidue,
    notes,
  };
}
