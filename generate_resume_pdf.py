import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_resume_pdf(filename):
    # Set standard margins (0.4 inch for clean fit)
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    # Define custom styles
    name_style = ParagraphStyle(
        'NameStyle',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#111827')
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#374151')
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#1f2937')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=7,
        spaceAfter=2
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#111827')
    )

    date_style = ParagraphStyle(
        'DateStyle',
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=2, # Right aligned
        textColor=colors.HexColor('#4b5563')
    )

    tech_stack_style = ParagraphStyle(
        'TechStack',
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#475569')
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1f2937'),
        leftIndent=12,
        firstLineIndent=-10,
        spaceAfter=1.5
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1f2937')
    )

    cert_title_style = ParagraphStyle(
        'CertTitle',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.HexColor('#111827'),
        leftIndent=12,
        firstLineIndent=-10
    )

    cert_desc_style = ParagraphStyle(
        'CertDesc',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#475569'),
        leftIndent=12
    )

    story = []

    def section_header(title):
        p = Paragraph(f"<b>{title}</b>", section_heading)
        hr = HRFlowable(width="100%", thickness=1, color=colors.HexColor('#0f172a'), spaceBefore=1, spaceAfter=4)
        return [p, hr]

    # --- HEADER ---
    header_data = [
        [
            Paragraph("<b>Abinaya R</b>", name_style),
            Paragraph("<b><font color='#0284c7'>■</font> SUNSTONE</b>", ParagraphStyle('Sunstone', fontName='Helvetica-Bold', fontSize=14, alignment=2, textColor=colors.HexColor('#0f172a')))
        ],
        [
            Paragraph("Aspiring Developer | React &amp; Network Security", title_style),
            ""
        ]
    ]
    header_table = Table(header_data, colWidths=[400, 140])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 3))

    # Contacts Line
    contacts_html = (
        '<font color="#0f766e">&#9993;</font> <a href="mailto:raviabinaya20106@gmail.com"><font color="#0f766e"><u>raviabinaya20106@gmail.com</u></font></a> &nbsp;|&nbsp; '
        '<font color="#0f766e">&#9742;</font> <a href="tel:8940764662"><font color="#0f766e">+91 8940764662</font></a> &nbsp;|&nbsp; '
        '<font color="#0f766e">&#9873;</font> Nilgiris, Tamil Nadu &nbsp;|&nbsp; '
        '<font color="#0f766e">&#9881;</font> <a href="https://github.com/raviabinaya20106-del"><font color="#0f766e"><u>github.com/raviabinaya20106-del</u></font></a> &nbsp;|&nbsp; '
        '<font color="#0f766e"><b>in</b></font> <a href="https://www.linkedin.com/in/abinaya-ravi-39a974354"><font color="#0f766e"><u>linkedin.com/in/abinaya-ravi-39a974354</u></font></a>'
    )
    story.append(Paragraph(contacts_html, contact_style))
    story.append(Spacer(1, 4))

    # --- SKILLS ---
    story.extend(section_header("Skills"))
    story.append(Paragraph("<b>Hard Skills:</b> HTML/CSS, Python, React.js, Node.js, JavaScript, Java, C++, Network Security", body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>Soft Skills:</b> Communication, Time Management, Networking, Teamwork, Problem-Solving, Decision-Making, Self-Leadership", body_style))
    story.append(Spacer(1, 5))

    # --- WORK EXPERIENCE ---
    story.extend(section_header("Work Experience"))

    # Experience 1
    exp1_data = [
        [Paragraph("<b>Web Developer - Coding Blocks</b>", job_title_style), Paragraph("Jun 2026 - Jul 2026", date_style)]
    ]
    t_exp1 = Table(exp1_data, colWidths=[380, 160])
    t_exp1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp1)
    story.append(Paragraph("HTML/CSS, Creative Writing, React.js, Node.js, JavaScript, Java, Bootstrap", tech_stack_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; Created responsive web pages with HTML, CSS, JavaScript, React.js, and Node.js, enhancing user experience", bullet_style))
    story.append(Paragraph("&bull; Contributed to website feature development, interface improvements, and performance optimization", bullet_style))
    story.append(Paragraph("&bull; Gained exposure to modern web development through testing, debugging, and understanding tools", bullet_style))
    story.append(Spacer(1, 5))

    # Experience 2
    exp2_data = [
        [Paragraph("<b>Cyber Security - Live Wire</b>", job_title_style), Paragraph("Jun 2025 - Jul 2025", date_style)]
    ]
    t_exp2 = Table(exp2_data, colWidths=[380, 160])
    t_exp2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp2)
    story.append(Paragraph("Creative Writing, Network Security, Cryptography, Networking Fundamentals, APIs, Ethical Hacking", tech_stack_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; Monitored network traffic, checked security issues, and updated software to improve safety", bullet_style))
    story.append(Paragraph("&bull; Gained practical skills in protecting systems and networks from threats during internship", bullet_style))
    story.append(Paragraph("&bull; Learned online safety importance through team collaboration and hands-on experience", bullet_style))
    story.append(Spacer(1, 5))

    # --- TECHNICAL PROJECTS ---
    story.extend(section_header("Technical Projects"))
    proj_data = [
        [Paragraph("<b>Smart Ecommerce Marketplace</b>", job_title_style), Paragraph("2026", date_style)]
    ]
    t_proj = Table(proj_data, colWidths=[380, 160])
    t_proj.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_proj)
    story.append(Paragraph("HTML/CSS, React.js, Node.js, JavaScript, Java, Bootstrap", tech_stack_style))
    story.append(Spacer(1, 1.5))
    story.append(Paragraph(
        '<a href="https://github.com/raviabinaya20106-del"><font color="#0f766e">&#9881; <u>GitHub Repository</u></font></a> &nbsp;&nbsp;&nbsp; '
        '<a href="https://github.com/raviabinaya20106-del"><font color="#0f766e">&#x2197; <u>Live Demo</u></font></a>',
        tech_stack_style
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; Developed a responsive ecommerce platform using HTML, CSS, JavaScript, React, and Node.js for better user experience.", bullet_style))
    story.append(Paragraph("&bull; Implemented features such as product search, listing, cart, and wishlist to enhance shopping functionality.", bullet_style))
    story.append(Paragraph("&bull; Designed an intuitive interface for easy navigation and seamless ordering.", bullet_style))
    story.append(Spacer(1, 5))

    # --- PROBLEM SOLVING & DATA STRUCTURES ---
    story.extend(section_header("Problem Solving &amp; Data Structures"))
    story.append(Paragraph('<b><a href="https://leetcode.com"><font color="#0f766e">&#x2197; LeetCode Profile Track</font></a></b>', job_title_style))
    story.append(Paragraph(
        "Passionate about problem-solving and data structures, with regular practice on LeetCode to enhance logical thinking and algorithm skills. "
        "Experienced in arrays, strings, linked lists, stacks, trees, and search techniques, with a solid understanding of Big O notation for complexity analysis. "
        "Proficient in C, Java, HTML, CSS, JavaScript, and Visual Studio Code, utilizing these tools to develop efficient solutions and optimize system performance.",
        body_style
    ))
    story.append(Spacer(1, 6))

    # --- PAGE 2: BALANCED SPLIT ---
    story.append(PageBreak())

    # --- EDUCATION ---
    story.extend(section_header("Education"))
    edu_data = [
        [Paragraph("<b>The TipsGlobal Institute</b><br/><font color='#4b5563' size='8.5'>BCA (2024-2027)</font>", body_style), ""],
        [Paragraph("<b>Mahatma Gandhi Matric Higher Secondary School</b><br/><font color='#4b5563' size='8.5'>Class XII (2024)</font>", body_style), Paragraph("<b>Percentage: 60</b>", date_style)],
        [Paragraph("<b>Sri Giri Easwara Matric School</b><br/><font color='#4b5563' size='8.5'>Class X (2022)</font>", body_style), Paragraph("<b>Percentage: 67</b>", date_style)]
    ]
    t_edu = Table(edu_data, colWidths=[380, 160])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 6))

    # --- CERTIFICATIONS ---
    story.extend(section_header("Certifications"))
    certs = [
        ("Oracle Certified Foundation Associate - Oracle (January 2026 - February 2026)",
         "Skills learned: Critical thinking, HTML/CSS, React.js, Node.js, JavaScript, Java"),
        ("Amazon RDS For SQL Server - AWS (July 2026 - July 2026)",
         "Skills learned: Critical thinking, HTML/CSS, Python, Time Management, Node.js, MySQL, SQL, AWS"),
        ("Web Development - IBM (August 2025 - September 2025)",
         "Skills learned: HTML/CSS, React.js, PHP, Node.js, JavaScript, Java"),
        ("Cyber Security - Live Wire (July 2025 - July 2025)",
         "Skills learned: Networking, Decision-Making, Computer Vision, Network Security, Penetration Testing, Cryptography"),
        ("Campaign Craze - Sunstone School Of Management (March 2025 - July 2025)",
         "Skills learned: Communication, Critical thinking, Leadership, Teamwork, Problem-Solving")
    ]
    for c_title, c_skills in certs:
        story.append(Paragraph(f"&bull; <b>{c_title}</b>", cert_title_style))
        story.append(Paragraph(c_skills, cert_desc_style))
        story.append(Spacer(1, 3))
    story.append(Spacer(1, 4))

    # --- ACHIEVEMENTS ---
    story.extend(section_header("Achievements"))
    achievements = [
        "Won 2nd prize \"Coding Competition\" at TIPS campus, fostering innovation, problem-solving, programming skills",
        "Secured 1st position in a team-led \"coding Quiz\" competition at the Tips campus, showcasing programming and technical analysis skills.",
        "Secured 1st place in the team-led \"Debate Competition\" at the TIPS campus, showcasing communication skills.",
        "Secured 1st place in the team-led 'Tech Quiz–Web Programming' led by the Tech club at the TIPS campus, demonstrating knowledge of web technologies and analytical thinking skills.",
        "Secured 2nd position in the 'Paper Couture' event held at the TIPS campus, demonstrating creativity and artistic vision skills."
    ]
    for ach in achievements:
        story.append(Paragraph(f"&bull; {ach}", bullet_style))
        story.append(Spacer(1, 3))

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == '__main__':
    create_resume_pdf("Abinaya_R_Resume.pdf")
