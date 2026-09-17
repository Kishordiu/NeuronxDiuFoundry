# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eventContent.spec.ts >> NeuronX26 Content, Configuration & UX Validations >> 08: Judge information is accurate without fabricated content
- Location: tests\eventContent.spec.ts:71:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('IT — Senior Manager').first()
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" getByText('IT — Senior Manager').first() with timeout 5000ms
  - waiting for getByText('IT — Senior Manager').first()
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: "#"
          - img "Neuro X Mind" [ref=e7]
        - generic [ref=e8]:
          - generic [ref=e9]:
            - link "About" [ref=e10] [cursor=pointer]:
              - /url: "#about"
            - link "Tracks" [ref=e11] [cursor=pointer]:
              - /url: "#tracks"
            - link "Timeline" [ref=e12] [cursor=pointer]:
              - /url: "#timeline"
            - link "Prizes" [ref=e13] [cursor=pointer]:
              - /url: "#prizes"
            - link "Rules" [ref=e14] [cursor=pointer]:
              - /url: "#rules"
            - link "FAQ" [ref=e15] [cursor=pointer]:
              - /url: "#faq"
          - link "Register" [ref=e16] [cursor=pointer]:
            - /url: https://forms.gle/1E3cZtYEpjZnt9dm6
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]:
          - heading "Neuro X Mind PRESENTS" [level=2] [ref=e26]
          - generic [ref=e27]:
            - generic [ref=e28]: "Community Partner: DIU Foundry"
            - generic [ref=e29]: •
            - generic [ref=e30]: October 3
        - heading "NeuronX26" [level=1] [ref=e31]
        - paragraph [ref=e32]: 8-HOUR HACKATHON
        - paragraph [ref=e33]: Learn → Ideate → Build → Mentor → Iterate → Demo → Network
      - generic [ref=e34]:
        - link "Register Now" [ref=e35] [cursor=pointer]:
          - /url: https://forms.gle/1E3cZtYEpjZnt9dm6
        - link "Explore the Hackathon ↓" [ref=e37] [cursor=pointer]:
          - /url: "#about"
          - text: Explore the Hackathon
          - generic [ref=e38]: ↓
    - generic [ref=e41]:
      - generic [ref=e43]:
        - generic [ref=e44]: DATE
        - generic [ref=e49]:
          - generic [ref=e50]: October 3
          - paragraph [ref=e52]: Official Hackathon Day
      - generic [ref=e54]:
        - generic [ref=e55]: DURATION
        - generic [ref=e61]:
          - generic [ref=e62]: 8 Hours
          - paragraph [ref=e64]: Intensive Build Sprint
      - generic [ref=e66]:
        - generic [ref=e67]: PRIZE POOL
        - generic [ref=e73]:
          - generic [ref=e74]: Revealing Soon
          - paragraph [ref=e76]: Classified by Organizers
      - link "View official venue on Google Maps" [ref=e77] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/xGJe6QcAXQEfrLxW8?g_st=ac
        - generic [ref=e78]:
          - generic [ref=e79]: VENUE
          - generic [ref=e85]:
            - generic [ref=e86]: Shanmuga Industries Arts & Science College
            - paragraph [ref=e91]: Official Location
    - generic [ref=e94]:
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "Neuro X Mind" [level=2] [ref=e97]
          - heading "Student Builder Community" [level=3] [ref=e98]
          - paragraph [ref=e99]: "\"Neuro X Mind is a student builder community where curious minds come together to learn, experiment, and turn ideas into working products. We bring students together to build, collaborate, and grow through technology, creativity, and real-world experiences.\""
        - heading "Why We Build" [level=2] [ref=e101]
        - paragraph [ref=e102]: One idea. Eight hours. One team. One build.
      - generic [ref=e105]:
        - generic [ref=e107]:
          - generic [ref=e108]: "01"
          - heading "Learn" [level=3] [ref=e109]
          - paragraph [ref=e110]: Absorb new tech stacks and paradigms.
        - generic [ref=e113]:
          - generic [ref=e114]: "02"
          - heading "Ideate" [level=3] [ref=e115]
          - paragraph [ref=e116]: Formulate ideas to solve real problems.
        - generic [ref=e119]:
          - generic [ref=e120]: "03"
          - heading "Build" [level=3] [ref=e121]
          - paragraph [ref=e122]: Turn concepts into functional code.
        - generic [ref=e125]:
          - generic [ref=e126]: "04"
          - heading "Mentor" [level=3] [ref=e127]
          - paragraph [ref=e128]: Gain insights from industry veterans.
        - generic [ref=e131]:
          - generic [ref=e132]: "05"
          - heading "Iterate" [level=3] [ref=e133]
          - paragraph [ref=e134]: Refine and polish your prototypes.
        - generic [ref=e137]:
          - generic [ref=e138]: "06"
          - heading "Demo" [level=3] [ref=e139]
          - paragraph [ref=e140]: Showcase your build to the world.
        - generic [ref=e143]:
          - generic [ref=e144]: "07"
          - heading "Network" [level=3] [ref=e145]
          - paragraph [ref=e146]: Connect with the builder community.
    - generic [ref=e150]:
      - generic [ref=e151]:
        - heading "Choose Your Terrain" [level=2] [ref=e152]
        - heading "Hackathon Tracks" [level=3] [ref=e153]
        - paragraph [ref=e154]: Problem statements will be revealed one day before the hackathon.
      - generic [ref=e155]:
        - generic [ref=e156]:
          - generic [ref=e158]:
            - generic [ref=e161]:
              - generic [ref=e162]: TRACK 01
              - generic [ref=e167]: LOCKED
            - generic [ref=e168]:
              - heading "Problem Statement 01" [level=4] [ref=e173]
              - paragraph [ref=e174]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e175]:
              - generic [ref=e176]: REVEALING SOON
              - generic [ref=e181]: STAY TUNED
          - generic [ref=e183]:
            - generic [ref=e186]:
              - generic [ref=e187]: TRACK 02
              - generic [ref=e192]: LOCKED
            - generic [ref=e193]:
              - heading "Problem Statement 02" [level=4] [ref=e198]
              - paragraph [ref=e199]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e200]:
              - generic [ref=e201]: REVEALING SOON
              - generic [ref=e207]: STAY TUNED
          - generic [ref=e209]:
            - generic [ref=e212]:
              - generic [ref=e213]: TRACK 03
              - generic [ref=e218]: LOCKED
            - generic [ref=e219]:
              - heading "Problem Statement 03" [level=4] [ref=e224]
              - paragraph [ref=e225]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e226]:
              - generic [ref=e227]: REVEALING SOON
              - generic [ref=e233]: STAY TUNED
          - generic [ref=e235]:
            - generic [ref=e238]:
              - generic [ref=e239]: TRACK 04
              - generic [ref=e244]: LOCKED
            - generic [ref=e245]:
              - heading "Problem Statement 04" [level=4] [ref=e250]
              - paragraph [ref=e251]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e252]:
              - generic [ref=e253]: REVEALING SOON
              - generic [ref=e259]: STAY TUNED
          - generic [ref=e261]:
            - generic [ref=e264]:
              - generic [ref=e265]: TRACK 05
              - generic [ref=e270]: LOCKED
            - generic [ref=e271]:
              - heading "Problem Statement 05" [level=4] [ref=e276]
              - paragraph [ref=e277]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e278]:
              - generic [ref=e279]: REVEALING SOON
              - generic [ref=e285]: STAY TUNED
        - generic [ref=e286]:
          - button "Previous card" [ref=e287]
          - button "Next card" [ref=e290]
    - generic [ref=e294]:
      - generic [ref=e295]:
        - heading "The Ascent" [level=2] [ref=e296]
        - heading "8-Hour Timeline" [level=3] [ref=e297]
      - generic [ref=e300]:
        - generic [ref=e302]:
          - generic [ref=e303]: 08:30 AM
          - heading "REGISTRATION & CHECK-IN" [level=4] [ref=e304]
          - paragraph [ref=e305]: Arrive at the venue, check in, and get settled with your team.
        - generic [ref=e308]:
          - generic [ref=e309]: 09:00 AM
          - heading "OPENING BRIEFING" [level=4] [ref=e310]
          - paragraph [ref=e311]: Welcome address, hackathon guidelines, and kickoff orientation.
        - generic [ref=e314]:
          - generic [ref=e315]: 09:30 AM
          - heading "HACKATHON COMMENCES" [level=4] [ref=e316]
          - paragraph [ref=e317]: The 8-hour build countdown begins. Start crafting your solution.
        - generic [ref=e320]:
          - generic [ref=e321]: 01:00 PM
          - heading "MIDPOINT CHECK & MENTORING" [level=4] [ref=e322]
          - paragraph [ref=e323]: Technical mentors review your progress and offer architectural feedback.
        - generic [ref=e326]:
          - generic [ref=e327]: 03:30 PM
          - heading "FINAL SPRINT & POLISH" [level=4] [ref=e328]
          - paragraph [ref=e329]: Feature lock, UI refinement, and preparing live demonstrations.
        - generic [ref=e332]:
          - generic [ref=e333]: 05:30 PM
          - heading "CODE FREEZE & SUBMISSION" [level=4] [ref=e334]
          - paragraph [ref=e335]: Submit your GitHub repository, project documentation, and presentation.
        - generic [ref=e338]:
          - generic [ref=e339]: 06:00 PM
          - heading "DEMO & EVALUATION" [level=4] [ref=e340]
          - paragraph [ref=e341]: Present your build and live demo to the official judge.
        - generic [ref=e344]:
          - generic [ref=e345]: 07:00 PM
          - heading "RESULTS & WRAP-UP" [level=4] [ref=e346]
          - paragraph [ref=e347]: Award ceremony, winner recognition, and closing remarks.
    - generic [ref=e350]:
      - generic [ref=e351]:
        - heading "The Summit" [level=2] [ref=e352]
        - heading "Rewards for Builders" [level=3] [ref=e353]
      - generic [ref=e354] [cursor=pointer]:
        - generic [ref=e356]: OFFICIAL POOL • CLASSIFIED
        - heading "TOTAL PRIZE POOL" [level=4] [ref=e366]
        - generic [ref=e367]: CLASSIFIED
        - paragraph [ref=e369]: The total prize pool will be revealed later.
        - generic [ref=e370]: REVEALING SOON
    - generic [ref=e379]:
      - generic [ref=e380]:
        - heading "EVALUATION & ALLIANCE" [level=2] [ref=e381]
        - heading "Judge & Partners" [level=3] [ref=e382]
      - generic [ref=e383]:
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]: JUDGE
            - heading "Ganesan Ravichandran" [level=4] [ref=e392]
            - generic [ref=e393]: MCA
            - generic [ref=e394]:
              - paragraph [ref=e395]: IT — Senior Manager
              - paragraph [ref=e396]: iD Freshfood
          - generic [ref=e397]: Evaluation Panel
        - generic [ref=e398]:
          - generic [ref=e399]:
            - generic [ref=e400]: COMMUNITY PARTNER
            - img "DIU Foundry" [ref=e409]
            - heading "DIU Foundry" [level=4] [ref=e410]
            - paragraph [ref=e411]: Supporting Innovation & Builder Ecosystem
          - generic [ref=e412]: Community Partner
        - generic [ref=e413]:
          - generic [ref=e414]:
            - generic [ref=e415]: SUPPORTING PARTNER
            - generic [ref=e421]: Amirtha Jewellery
            - heading "Amirtha Jewellery" [level=4] [ref=e423]
            - paragraph [ref=e424]: Official Supporting Partner
          - generic [ref=e425]: Supporting Partner
    - generic [ref=e428]:
      - generic [ref=e429]:
        - generic [ref=e430]:
          - heading "The Code" [level=2] [ref=e431]
          - heading "Rules" [level=3] [ref=e432]
        - generic [ref=e433]:
          - generic [ref=e434]:
            - button "Eligibility" [expanded] [ref=e435] [cursor=pointer]
            - paragraph [ref=e441]: Open to all university students with a passion for building.
          - button "Team Size" [ref=e443] [cursor=pointer]
          - button "Registration Fee" [ref=e448] [cursor=pointer]
          - button "Duration" [ref=e453] [cursor=pointer]
          - button "Problem Statements" [ref=e458] [cursor=pointer]
          - button "Refund Policy" [ref=e463] [cursor=pointer]
          - button "Submission Requirements" [ref=e468] [cursor=pointer]
      - generic [ref=e472]:
        - generic [ref=e473]:
          - heading "Before You Climb" [level=2] [ref=e474]
          - heading "FAQ" [level=3] [ref=e475]
        - generic [ref=e476]:
          - generic [ref=e477]:
            - button "What is the prize pool?" [expanded] [ref=e478] [cursor=pointer]
            - paragraph [ref=e484]: The total prize pool will be revealed later.
          - button "Is the ticket fee refundable?" [ref=e486] [cursor=pointer]
          - button "How long is the hackathon?" [ref=e491] [cursor=pointer]
          - button "When will the problem statements be released?" [ref=e496] [cursor=pointer]
          - button "Where is the hackathon being conducted?" [ref=e501] [cursor=pointer]
          - button "Who can participate?" [ref=e506] [cursor=pointer]
          - button "How many members can a team have?" [ref=e511] [cursor=pointer]
          - button "What is the registration fee?" [ref=e516] [cursor=pointer]
          - button "What must we submit?" [ref=e521] [cursor=pointer]
          - button "Where do we submit the project?" [ref=e526] [cursor=pointer]
    - generic [ref=e535]:
      - heading "Reach The Summit" [level=2] [ref=e536]
      - heading "READY TO BUILD?" [level=3] [ref=e537]
      - paragraph [ref=e538]: 8 HOURS. ONE IDEA. MAKE IT REAL.
      - generic [ref=e539]:
        - link "Register Now ↗" [ref=e540] [cursor=pointer]:
          - /url: https://forms.gle/1E3cZtYEpjZnt9dm6
          - generic [ref=e541]:
            - text: Register Now
            - generic [ref=e542]: ↗
        - button "Back to Top ↑" [ref=e544]
    - generic [ref=e547]:
      - generic [ref=e548]:
        - generic [ref=e549]: NeuronX26
        - generic [ref=e550]: 8-HOUR HACKATHON
        - generic [ref=e551]: © 2026 Neuro X Mind
      - generic [ref=e553] [cursor=pointer]:
        - img "Mukesh" [ref=e555]
        - generic [ref=e556]:
          - generic [ref=e557]:
            - generic [ref=e558]: Mukesh
            - generic [ref=e559]: Organizer • Neuro X Mind / NeuronX26
          - generic [ref=e560]:
            - link "@neuro_x_mind_" [ref=e561]:
              - /url: https://instagram.com/neuro_x_mind_/
            - link "+91 79043 36751" [ref=e565]:
              - /url: tel:+917904336751
            - link "neuroxmind2026@gmail.com" [ref=e568]:
              - /url: mailto:neuroxmind2026@gmail.com
      - generic [ref=e572]:
        - generic [ref=e573]:
          - generic [ref=e574]:
            - generic [ref=e575]: Community Partner
            - img "DIU Foundry" [ref=e576]
            - generic [ref=e577]: DIU Foundry
          - generic [ref=e578]:
            - generic [ref=e579]: Supporting Partner
            - generic [ref=e580]: Amirtha Jewellery
        - generic [ref=e581]:
          - generic [ref=e582]: Links
          - link "VIEW VENUE ↗" [ref=e583] [cursor=pointer]:
            - /url: https://maps.app.goo.gl/xGJe6QcAXQEfrLxW8?g_st=ac
          - link "Registration Form ↗" [ref=e584] [cursor=pointer]:
            - /url: https://forms.gle/1E3cZtYEpjZnt9dm6
  - button "Open Next.js Dev Tools" [ref=e590] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.describe("NeuronX26 Content, Configuration & UX Validations", () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     // Navigate to homepage and wait until network is idle
  6   |     await page.goto("/", { waitUntil: "domcontentloaded" });
  7   |   });
  8   | 
  9   |   test("01 & 02: Event name and community information are correct", async ({ page }) => {
  10  |     // Event name NeuronX26
  11  |     await expect(page).toHaveTitle(/NeuronX26/);
  12  |     const heroTitle = page.locator("h1");
  13  |     await expect(heroTitle).toContainText("NeuronX26");
  14  | 
  15  |     // Community Neuro X Mind
  16  |     const communityName = page.getByText("Neuro X Mind").first();
  17  |     await expect(communityName).toBeVisible();
  18  | 
  19  |     // Community description
  20  |     const descText = "Neuro X Mind is a student builder community where curious minds come together to learn, experiment, and turn ideas into working products";
  21  |     await expect(page.locator("body")).toContainText(descText);
  22  |   });
  23  | 
  24  |   test("03: Duration is 8-Hour Hackathon with zero 12-hour references", async ({ page }) => {
  25  |     // 8-hour hackathon visible in Hero and facts
  26  |     await expect(page.locator("body")).toContainText("8-HOUR HACKATHON");
  27  |     await expect(page.locator("body")).toContainText("8-Hour Timeline");
  28  |     await expect(page.locator("body")).toContainText("Eight hours");
  29  | 
  30  |     // Zero 12-hour references in visible body
  31  |     const bodyText = await page.innerText("body");
  32  |     expect(bodyText).not.toMatch(/12-hour/i);
  33  |     expect(bodyText).not.toMatch(/12 hour/i);
  34  |     expect(bodyText).not.toMatch(/twelve hours/i);
  35  | 
  36  |     // Zero Nexoran references
  37  |     expect(bodyText).not.toMatch(/nexoran/i);
  38  |     expect(bodyText).not.toMatch(/neuronx'26/i);
  39  |   });
  40  | 
  41  |   test("04: Event date is October 3", async ({ page }) => {
  42  |     const dateElements = page.getByText(/October 3/i);
  43  |     await expect(dateElements.first()).toBeVisible();
  44  |   });
  45  | 
  46  |   test("05: Organizer contact information is correct", async ({ page }) => {
  47  |     await expect(page.locator("body")).toContainText("Mukesh");
  48  |     await expect(page.locator("body")).toContainText("+91 79043 36751");
  49  |     await expect(page.locator("body")).toContainText("neuroxmind2026@gmail.com");
  50  | 
  51  |     const igLink = page.locator('a[href*="instagram.com/neuro_x_mind_"]');
  52  |     await expect(igLink.first()).toBeVisible();
  53  | 
  54  |     // Ensure old email does not exist
  55  |     const bodyContent = await page.content();
  56  |     expect(bodyContent).not.toContain("diufoundry@gmail.com");
  57  |   });
  58  | 
  59  |   test("06 & 07: Partners are correctly labeled and displayed", async ({ page }) => {
  60  |     // Community Partner DIU Foundry
  61  |     const communityPartnerLabel = page.getByText("COMMUNITY PARTNER").first();
  62  |     await expect(communityPartnerLabel).toBeVisible();
  63  |     await expect(page.locator("body")).toContainText("DIU Foundry");
  64  | 
  65  |     // Supporting Partner Amirtha Jewellery
  66  |     const supportingPartnerLabel = page.getByText("SUPPORTING PARTNER").first();
  67  |     await expect(supportingPartnerLabel).toBeVisible();
  68  |     await expect(page.locator("body")).toContainText("Amirtha Jewellery");
  69  |   });
  70  | 
  71  |   test("08: Judge information is accurate without fabricated content", async ({ page }) => {
  72  |     await expect(page.getByText("Ganesan Ravichandran")).toBeVisible();
  73  |     await expect(page.getByText("MCA").first()).toBeVisible();
> 74  |     await expect(page.getByText("IT — Senior Manager").first()).toBeVisible();
      |                                                                 ^ Error: expect(locator).toBeVisible() failed
  75  |     await expect(page.getByText("iD Freshfood").first()).toBeVisible();
  76  |   });
  77  | 
  78  |   test("09 & 26: Venue destination link is correct and opens externally", async ({ page }) => {
  79  |     const venueLink = "https://maps.app.goo.gl/xGJe6QcAXQEfrLxW8?g_st=ac";
  80  |     const venueAnchor = page.locator(`a[href="${venueLink}"]`).first();
  81  |     await expect(venueAnchor).toBeVisible();
  82  |     await expect(venueAnchor).toHaveAttribute("target", "_blank");
  83  |     await expect(venueAnchor).toHaveAttribute("rel", "noopener noreferrer");
  84  |   });
  85  | 
  86  |   test("10, 11 & 12: Problem statements are locked with release policy displayed", async ({ page }) => {
  87  |     const releaseText = "Problem statements will be revealed one day before the hackathon.";
  88  |     await expect(page.locator("body")).toContainText(releaseText);
  89  | 
  90  |     // Cards should show locked indicators
  91  |     const lockedPills = page.getByText("LOCKED");
  92  |     expect(await lockedPills.count()).toBeGreaterThan(0);
  93  | 
  94  |     // Track cards exist in 3D carousel
  95  |     const trackCard = page.getByText("TRACK 01").first();
  96  |     await expect(trackCard).toBeVisible();
  97  | 
  98  |     // Sensitive unrevealed titles should not be visible
  99  |     const unrevealedTitle = "Forty Listings Open, Still No Idea Which One's Real";
  100 |     const pageContent = await page.content();
  101 |     expect(pageContent).not.toContain(unrevealedTitle);
  102 |   });
  103 | 
  104 |   test("16, 17, 18, 19, 28 & 29: Prize pool is secret/classified with ZERO numbers", async ({ page }) => {
  105 |     // Classified / secret display text
  106 |     const classifiedText = page.getByText("CLASSIFIED").first();
  107 |     await expect(classifiedText).toBeVisible();
  108 |     await expect(page.locator("body")).toContainText("The total prize pool will be revealed later.");
  109 | 
  110 |     // Absolutely zero numerical prize amounts
  111 |     const pageContent = await page.content();
  112 |     expect(pageContent).not.toContain("₹15,000");
  113 |     expect(pageContent).not.toContain("15,000");
  114 |     expect(pageContent).not.toContain("₹20,000");
  115 |     expect(pageContent).not.toContain("20,000");
  116 |     expect(pageContent).not.toContain("₹8,000");
  117 |     expect(pageContent).not.toContain("8,000");
  118 | 
  119 |     // No prize counter counting from 0
  120 |     const bodyText = await page.innerText("body");
  121 |     expect(bodyText).not.toMatch(/₹\s*0/);
  122 |   });
  123 | 
  124 |   test("22, 23, 24, 25: FAQ policies are strictly answered", async ({ page }) => {
  125 |     // Prize FAQ (open by default as index 0)
  126 |     await expect(page.locator("body")).toContainText("What is the prize pool?");
  127 |     await expect(page.locator("body")).toContainText("The total prize pool will be revealed later.");
  128 | 
  129 |     // Refund FAQ (click to expand)
  130 |     const refundBtn = page.getByRole("button", { name: "Is the ticket fee refundable?" });
  131 |     await expect(refundBtn).toBeVisible();
  132 |     await refundBtn.click();
  133 |     await expect(page.locator("body")).toContainText("No. The ticket fee is non-refundable.");
  134 | 
  135 |     // Duration FAQ (click to expand)
  136 |     const durationBtn = page.getByRole("button", { name: "How long is the hackathon?" });
  137 |     await expect(durationBtn).toBeVisible();
  138 |     await durationBtn.click();
  139 |     await expect(page.locator("body")).toContainText("NeuronX26 is an 8-hour hackathon.");
  140 | 
  141 |     // Release FAQ (click to expand)
  142 |     const releaseBtn = page.getByRole("button", { name: "When will the problem statements be released?" });
  143 |     await expect(releaseBtn).toBeVisible();
  144 |     await releaseBtn.click();
  145 |     await expect(page.locator("body")).toContainText("The problem statements will be revealed one day before the hackathon.");
  146 |   });
  147 | 
  148 |   test("31: Event facts bar displays key parameters", async ({ page }) => {
  149 |     const factsSection = page.locator("section").filter({ hasText: "DATE" }).first();
  150 |     await expect(factsSection).toContainText("October 3");
  151 |     await expect(factsSection).toContainText("8 Hours");
  152 |     await expect(factsSection).toContainText("Revealing Soon");
  153 |     await expect(factsSection).toContainText("Shanmuga Industries Arts & Science College");
  154 |   });
  155 | 
  156 |   test("20, 21, 37: Responsive layout test across viewports with no horizontal overflow", async ({ page }) => {
  157 |     const viewports = [
  158 |       { width: 320, height: 600 },
  159 |       { width: 360, height: 740 },
  160 |       { width: 375, height: 667 },
  161 |       { width: 390, height: 844 },
  162 |       { width: 414, height: 896 },
  163 |       { width: 430, height: 932 },
  164 |       { width: 768, height: 1024 },
  165 |       { width: 1024, height: 768 },
  166 |       { width: 1280, height: 800 },
  167 |       { width: 1440, height: 900 },
  168 |     ];
  169 | 
  170 |     for (const vp of viewports) {
  171 |       await page.setViewportSize(vp);
  172 |       await page.waitForTimeout(200);
  173 | 
  174 |       // Check for horizontal overflow
```