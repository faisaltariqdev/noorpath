#!/usr/bin/env python3
"""Build the professional Printing Credit Management proposal PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "docs" / "noorpath-logo-wordmark.png"
OUT = ROOT / "docs" / "NoorPath_Printing_Credit_Management_Proposal.pdf"

EMERALD = colors.HexColor("#0a6e4f")
EMERALD_DEEP = colors.HexColor("#0f3d2c")
GOLD = colors.HexColor("#c9a84c")
INK = colors.HexColor("#163028")
MUTED = colors.HexColor("#5b7168")
LINE = colors.HexColor("#d7e4dc")
IVORY = colors.HexColor("#f7f2e8")
CREAM = colors.HexColor("#fffdf8")
PAGE_BG = colors.white


def styles():
    base = getSampleStyleSheet()
    return {
        "kicker": ParagraphStyle(
            "kicker",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=8.5,
            leading=11,
            textColor=EMERALD,
            alignment=TA_CENTER,
            letterSpacing=1.2,
        ),
        "title": ParagraphStyle(
            "title",
            parent=base["Title"],
            fontName="Times-Bold",
            fontSize=18,
            leading=22,
            textColor=EMERALD_DEEP,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "subtitle": ParagraphStyle(
            "subtitle",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=12,
            leading=15,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=10,
        ),
        "h": ParagraphStyle(
            "h",
            parent=base["Heading2"],
            fontName="Times-Bold",
            fontSize=11.5,
            leading=15,
            textColor=EMERALD,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            leading=14,
            textColor=INK,
            alignment=TA_JUSTIFY,
            spaceAfter=6,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9,
            leading=12.5,
            textColor=INK,
            alignment=TA_LEFT,
        ),
        "contact": ParagraphStyle(
            "contact",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9,
            leading=13,
            textColor=INK,
            alignment=TA_CENTER,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=8,
            leading=10,
            textColor=MUTED,
        ),
        "th": ParagraphStyle(
            "th",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=8.5,
            leading=11,
            textColor=colors.white,
            alignment=TA_CENTER,
        ),
        "td": ParagraphStyle(
            "td",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=8.5,
            leading=11,
            textColor=INK,
            alignment=TA_CENTER,
        ),
        "goal": ParagraphStyle(
            "goal",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            leading=14,
            textColor=INK,
            alignment=TA_JUSTIFY,
        ),
        "note": ParagraphStyle(
            "note",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10,
            leading=13,
            textColor=EMERALD_DEEP,
            alignment=TA_CENTER,
            spaceBefore=6,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            leading=13.5,
            textColor=INK,
        ),
    }


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setFillColor(EMERALD)
    canvas.rect(0, h - 8, w, 8, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, h - 11, w, 3, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(18 * mm, 16 * mm, w - 18 * mm, 16 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Times-Roman", 8)
    canvas.drawString(18 * mm, 11 * mm, "NoorPath  ·  Software & Digital Services")
    canvas.drawRightString(w - 18 * mm, 11 * mm, f"Page {doc.page}")
    canvas.setFont("Times-Roman", 7.5)
    canvas.drawCentredString(
        w / 2,
        7 * mm,
        "https://www.noorpath.online   ·   info@noorpath.online   ·   +92 312 4877906",
    )
    canvas.restoreState()


def bullets(items, s):
    return ListFlowable(
        [ListItem(Paragraph(item, s["bullet"]), leftIndent=8, bulletColor=EMERALD) for item in items],
        bulletType="bullet",
        start="•",
        leftIndent=14,
        bulletFontName="Times-Bold",
        bulletFontSize=9,
        spaceBefore=1,
        spaceAfter=6,
    )


def contact_card(s):
    inner = [
        Paragraph("<b>Prepared by NoorPath</b>", s["contact"]),
        Spacer(1, 3),
        Paragraph("Software &amp; Digital Services  ·  Online Quran Learning  ·  Islamic Tools", s["contact"]),
        Spacer(1, 8),
        Paragraph(
            "<b>Website</b> &nbsp; https://www.noorpath.online<br/>"
            "<b>Email</b> &nbsp; info@noorpath.online<br/>"
            "<b>WhatsApp</b> &nbsp; +92 312 4877906<br/>"
            "<b>Address</b> &nbsp; Online operations · Serving clients worldwide",
            s["contact"],
        ),
    ]
    data = [[inner]]
    table = Table(data, colWidths=[160 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), IVORY),
                ("BOX", (0, 0), (-1, -1), 0.6, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 14),
                ("RIGHTPADDING", (0, 0), (-1, -1), 14),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def build():
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=22 * mm,
        title="Printing Credit Management System — Project Proposal",
        author="NoorPath",
        subject="Custom software proposal for institute printing-credit control",
    )

    story = []
    story.append(Image(str(LOGO), width=150, height=32, kind="proportional", mask="auto"))
    story.append(Spacer(1, 6))
    story.append(Paragraph("NOORPATH  ·  SOFTWARE &amp; DIGITAL SERVICES", s["kicker"]))
    story.append(Spacer(1, 8))
    story.append(Paragraph("PRINTING CREDIT MANAGEMENT SYSTEM", s["title"]))
    story.append(Paragraph("Project Proposal", s["subtitle"]))
    story.append(contact_card(s))
    story.append(Spacer(1, 8))
    story.append(
        Paragraph(
            "NoorPath provides online Quran learning, Islamic productivity tools, and custom software "
            "that solves operational problems for schools and institutes. This proposal covers a "
            "purpose-built printing credit system.",
            s["body"],
        )
    )

    story.append(Paragraph("1. Project Overview", s["h"]))
    story.append(
        Paragraph(
            "We propose to develop a simple and user-friendly Printing Credit Management System for the institute. "
            "The system will allow the administrator to manage students and teachers, assign printing credits, "
            "and control printing based on the available credit balance.",
            s["body"],
        )
    )
    story.append(
        Paragraph(
            "The main purpose of the system is to ensure that every printed page consumes one credit and users "
            "cannot print once their allocated credits have been exhausted.",
            s["body"],
        )
    )

    story.append(Paragraph("2. Admin Panel", s["h"]))
    story.append(
        Paragraph(
            "The administrator will have a centralized dashboard to manage the complete system.",
            s["body"],
        )
    )
    story.append(
        bullets(
            [
                "Add Students",
                "Add Teachers",
                "Edit student and teacher information",
                "Activate or deactivate users",
                "Assign printing credits to students and teachers",
                "Add additional / recharge credits",
                "View remaining credits",
                "View used credits",
                "View printing history",
                "Monitor printing activity",
            ],
            s,
        )
    )

    story.append(Paragraph("3. Credit System", s["h"]))
    story.append(
        Paragraph(
            "Each student or teacher will have a credit balance. Example: if a user has 100 credits and prints "
            "1 page, 1 credit is deducted. If the user prints 5 pages, 5 credits are deducted.",
            s["body"],
        )
    )

    story.append(Paragraph("4. Printing Restriction", s["h"]))
    story.append(
        Paragraph(
            "Before allowing a print job, the system will check the user’s available credits. "
            "If sufficient credits are available: Print Allowed → Pages Printed → Credits Deducted. "
            "If credits are exhausted, printing is blocked automatically.",
            s["body"],
        )
    )
    story.append(
        Paragraph(
            "The user will see a message such as: “Your printing credits have been exhausted. "
            "Please recharge your credits to continue printing.” The system will not allow additional "
            "printing until credits are added to the account.",
            s["body"],
        )
    )

    story.append(Paragraph("5. Recharge / Credit Renewal", s["h"]))
    story.append(
        Paragraph(
            "When a student’s or teacher’s credits reach zero, the administrator can recharge the account "
            "by adding new credits. Example: Current Balance 0 → Admin adds +100 credits → New Balance 100 → "
            "the user can continue printing.",
            s["body"],
        )
    )

    story.append(Paragraph("6. User Management", s["h"]))
    story.append(
        Paragraph(
            "<b>Students:</b> Name, Student ID, Class, Section, Contact Information, Credit Balance, Account Status.<br/>"
            "<b>Teachers:</b> Name, Teacher ID, Contact Information, Credit Balance, Account Status.",
            s["body"],
        )
    )

    story.append(Paragraph("7. Printing History", s["h"]))
    story.append(
        Paragraph(
            "The system will maintain a basic record of printing activity, including user name, number of pages "
            "printed, credits consumed, date and time, and printing status.",
            s["body"],
        )
    )

    story.append(Paragraph("8. Basic Dashboard", s["h"]))
    story.append(
        Paragraph(
            "The admin dashboard will display Total Students, Total Teachers, Total Credits Assigned, "
            "Total Credits Used, Remaining Credits, Recent Printing Activity, and Users with Zero Credits.",
            s["body"],
        )
    )

    story.append(Paragraph("9. Basic System Flow", s["h"]))
    story.append(
        Paragraph(
            "Admin → Add Student / Teacher → Assign Printing Credits → User Prints Document → "
            "System Counts Pages → Credits Deducted Per Page → Credits = 0 → Printing Automatically Blocked → "
            "Admin Recharges Credits → User Can Print Again.",
            s["body"],
        )
    )

    story.append(Paragraph("10. Project Deliverables", s["h"]))
    story.append(
        bullets(
            [
                "Admin Panel",
                "Student Management",
                "Teacher Management",
                "Credit Management",
                "Printing Credit Control",
                "Automatic Credit Deduction",
                "Printing Restriction",
                "Credit Recharge",
                "Printing History",
                "Basic Dashboard",
                "User Authentication",
                "Database Setup",
                "System Deployment",
            ],
            s,
        )
    )

    story.append(Paragraph("11. Estimated Timeline", s["h"]))
    story.append(Paragraph("<b>Estimated development time:</b> 3–4 weeks.", s["body"]))
    story.append(
        bullets(
            [
                "Week 1: Database setup, authentication, admin panel, student and teacher management.",
                "Week 2: Credit management, credit assignment, recharge functionality, user dashboard.",
                "Week 3: Printing integration, page-based credit deduction, printing restrictions, printing history.",
                "Week 4: Testing, bug fixing, deployment, and final adjustments.",
            ],
            s,
        )
    )

    story.append(Paragraph("12. Important Note", s["h"]))
    story.append(
        Paragraph(
            "The printing functionality will be implemented based on the institute’s existing printer setup "
            "and supported printer / operating-system environment. Any third-party costs such as printer hardware, "
            "hosting, domain, SMS services, payment gateways, or other external services are not included unless "
            "specifically agreed upon.",
            s["body"],
        )
    )

    story.append(Paragraph("Credit Usage Example", s["h"]))
    header = [Paragraph(x, s["th"]) for x in ["User", "Assigned Credits", "Pages Printed", "Credits Used", "Remaining"]]
    rows = [
        header,
        [Paragraph(x, s["td"]) for x in ["Student A", "100", "65", "65", "35"]],
        [Paragraph(x, s["td"]) for x in ["Student B", "100", "100", "100", "0"]],
    ]
    table = Table(rows, colWidths=[32 * mm, 36 * mm, 32 * mm, 32 * mm, 28 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), EMERALD),
                ("BACKGROUND", (0, 1), (-1, 1), CREAM),
                ("BACKGROUND", (0, 2), (-1, 2), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.5, EMERALD),
                ("INNERGRID", (0, 0), (-1, -1), 0.3, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(table)
    story.append(Spacer(1, 10))

    goal = [
        Paragraph("<b>Project Goal</b>", ParagraphStyle("gh", parent=s["h"], spaceBefore=0, alignment=TA_CENTER)),
        Paragraph(
            "The goal of this system is to provide the institute with a simple, reliable, and controlled "
            "printing-credit solution where every printed page consumes a credit and users are automatically "
            "prevented from printing when their available credits reach zero.",
            s["goal"],
        ),
        Paragraph("No project cost is included in this proposal.", s["note"]),
    ]
    goal_table = Table([[goal]], colWidths=[160 * mm])
    goal_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fff7e6")),
                ("BOX", (0, 0), (-1, -1), 0.6, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    story.append(KeepTogether([goal_table]))

    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    print(OUT)


if __name__ == "__main__":
    build()
