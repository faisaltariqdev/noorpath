// Real reviews from https://www.trustpilot.com/review/noorpath.online
// ONLY add reviews that actually exist on the Trustpilot page — never invent any.

export const TRUSTPILOT_SCORE = "4.0";
export const TRUSTPILOT_REVIEW_COUNT = 4;

export interface TrustpilotReview {
  name: string;
  country: string;
  stars: number;
  title: string;
  text: string;
  date: string;
}

export const trustpilotReviews: TrustpilotReview[] = [
  {
    name: "Ahmed",
    country: "🇬🇧 UK",
    stars: 5,
    title: "Salam",
    text: "Reciting Quran Pak is one of the greatest acts of worship. Teachers have good knowledge, understanding and patience. Professional online Quran Pak learning with compassionate teaching, regular revision and real confidence building. Mash'Allah fantastic teachers, calm atmosphere. Highly recommended.",
    date: "July 2026",
  },
  {
    name: "Mohammed Omer Al Amoodi",
    country: "🇦🇪 UAE",
    stars: 5,
    title: "May Allah bless whoever has created this…",
    text: "May Allah bless who ever has created this app and may Allah help reach this app to all Muslims. Very helpful and easy to understand and access.",
    date: "July 2026",
  },
  {
    name: "Hassan Tariq",
    country: "🇦🇪 UAE",
    stars: 5,
    title: "Excellent Online Quran teaching Platform",
    text: "I had a great experience with this online Quran teaching website. The teachers are knowledgeable, patient, and professional. Classes are well-organized, and the learning environment is very comfortable for both children and adults. The instructors focus on proper Tajweed. I highly recommend this platform to anyone looking for quality online Quran education.",
    date: "June 2026",
  },
  {
    name: "Hamza Iqbal",
    country: "🇵🇰 Pakistan",
    stars: 5,
    title: "Impressive platform",
    text: "Impressive platform, good and supportive staff, recommended.",
    date: "June 2026",
  },
];
