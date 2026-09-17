# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eventContent.spec.ts >> NeuronX26 Content, Configuration & UX Validations >> 20, 21, 37: Responsive layout test across viewports with no horizontal overflow
- Location: tests\eventContent.spec.ts:156:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.evaluate: Test timeout of 30000ms exceeded.
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
        - /url: https://maps.app.goo.gl/abi3y8AnDBKfNJ8ir8?g_st=aw
        - generic [ref=e78]:
          - generic [ref=e79]: VENUE
          - generic [ref=e85]:
            - generic [ref=e86]: View on Google Maps
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
              - generic [ref=e182]: STAY TUNED
          - generic [ref=e184]:
            - generic [ref=e187]:
              - generic [ref=e188]: TRACK 02
              - generic [ref=e193]: LOCKED
            - generic [ref=e194]:
              - heading "Problem Statement 02" [level=4] [ref=e199]
              - paragraph [ref=e200]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e201]:
              - generic [ref=e202]: REVEALING SOON
              - generic [ref=e208]: STAY TUNED
          - generic [ref=e210]:
            - generic [ref=e213]:
              - generic [ref=e214]: TRACK 03
              - generic [ref=e219]: LOCKED
            - generic [ref=e220]:
              - heading "Problem Statement 03" [level=4] [ref=e225]
              - paragraph [ref=e226]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e227]:
              - generic [ref=e228]: REVEALING SOON
              - generic [ref=e234]: STAY TUNED
          - generic [ref=e236]:
            - generic [ref=e239]:
              - generic [ref=e240]: TRACK 04
              - generic [ref=e245]: LOCKED
            - generic [ref=e246]:
              - heading "Problem Statement 04" [level=4] [ref=e251]
              - paragraph [ref=e252]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e253]:
              - generic [ref=e254]: REVEALING SOON
              - generic [ref=e260]: STAY TUNED
          - generic [ref=e262]:
            - generic [ref=e265]:
              - generic [ref=e266]: TRACK 05
              - generic [ref=e271]: LOCKED
            - generic [ref=e272]:
              - heading "Problem Statement 05" [level=4] [ref=e277]
              - paragraph [ref=e278]: Problem statements will be revealed one day before the hackathon.
            - generic [ref=e279]:
              - generic [ref=e280]: REVEALING SOON
              - generic [ref=e286]: STAY TUNED
        - generic [ref=e287]:
          - button "Previous card" [ref=e288]
          - button "Next card" [ref=e291]
    - generic [ref=e295]:
      - generic [ref=e296]:
        - heading "The Ascent" [level=2] [ref=e297]
        - heading "8-Hour Timeline" [level=3] [ref=e298]
      - generic [ref=e301]:
        - generic [ref=e303]:
          - generic [ref=e304]: 08:30 AM
          - heading "REGISTRATION & CHECK-IN" [level=4] [ref=e305]
          - paragraph [ref=e306]: Arrive at the venue, check in, and get settled with your team.
        - generic [ref=e309]:
          - generic [ref=e310]: 09:00 AM
          - heading "OPENING BRIEFING" [level=4] [ref=e311]
          - paragraph [ref=e312]: Welcome address, hackathon guidelines, and kickoff orientation.
        - generic [ref=e315]:
          - generic [ref=e316]: 09:30 AM
          - heading "HACKATHON COMMENCES" [level=4] [ref=e317]
          - paragraph [ref=e318]: The 8-hour build countdown begins. Start crafting your solution.
        - generic [ref=e321]:
          - generic [ref=e322]: 01:00 PM
          - heading "MIDPOINT CHECK & MENTORING" [level=4] [ref=e323]
          - paragraph [ref=e324]: Technical mentors review your progress and offer architectural feedback.
        - generic [ref=e327]:
          - generic [ref=e328]: 03:30 PM
          - heading "FINAL SPRINT & POLISH" [level=4] [ref=e329]
          - paragraph [ref=e330]: Feature lock, UI refinement, and preparing live demonstrations.
        - generic [ref=e333]:
          - generic [ref=e334]: 05:30 PM
          - heading "CODE FREEZE & SUBMISSION" [level=4] [ref=e335]
          - paragraph [ref=e336]: Submit your GitHub repository, project documentation, and presentation.
        - generic [ref=e339]:
          - generic [ref=e340]: 06:00 PM
          - heading "DEMO & EVALUATION" [level=4] [ref=e341]
          - paragraph [ref=e342]: Present your build and live demo to the official judge.
        - generic [ref=e345]:
          - generic [ref=e346]: 07:00 PM
          - heading "RESULTS & WRAP-UP" [level=4] [ref=e347]
          - paragraph [ref=e348]: Award ceremony, winner recognition, and closing remarks.
    - generic [ref=e351]:
      - generic [ref=e352]:
        - heading "The Summit" [level=2] [ref=e353]
        - heading "Rewards for Builders" [level=3] [ref=e354]
      - generic [ref=e355] [cursor=pointer]:
        - generic [ref=e357]: OFFICIAL POOL • CLASSIFIED
        - heading "TOTAL PRIZE POOL" [level=4] [ref=e367]
        - generic [ref=e368]: CLASSIFIED
        - paragraph [ref=e370]: The total prize pool will be revealed later.
        - generic [ref=e371]: REVEALING SOON
    - generic [ref=e380]:
      - generic [ref=e381]:
        - heading "EVALUATION & ALLIANCE" [level=2] [ref=e382]
        - heading "Judge & Partners" [level=3] [ref=e383]
      - generic [ref=e384]:
        - generic [ref=e385]:
          - generic [ref=e386]:
            - generic [ref=e387]: JUDGE
            - heading "Ganesan Ravichandran" [level=4] [ref=e393]
            - generic [ref=e394]: MCA
            - generic [ref=e395]:
              - paragraph [ref=e396]: IT — Senior Manager
              - paragraph [ref=e397]: iD Freshfood
          - generic [ref=e398]: Evaluation Panel
        - generic [ref=e399]:
          - generic [ref=e400]:
            - generic [ref=e401]: COMMUNITY PARTNER
            - img "DIU Foundry" [ref=e410]
            - heading "DIU Foundry" [level=4] [ref=e411]
            - paragraph [ref=e412]: Supporting Innovation & Builder Ecosystem
          - generic [ref=e413]: Community Partner
        - generic [ref=e414]:
          - generic [ref=e415]:
            - generic [ref=e416]: SUPPORTING PARTNER
            - generic [ref=e422]: Amirtha Jewellery
            - heading "Amirtha Jewellery" [level=4] [ref=e424]
            - paragraph [ref=e425]: Official Supporting Partner
          - generic [ref=e426]: Supporting Partner
    - generic [ref=e429]:
      - generic [ref=e430]:
        - generic [ref=e431]:
          - heading "The Code" [level=2] [ref=e432]
          - heading "Rules" [level=3] [ref=e433]
        - generic [ref=e434]:
          - generic [ref=e435]:
            - button "Eligibility" [expanded] [ref=e436] [cursor=pointer]
            - paragraph [ref=e442]: Open to all university students with a passion for building.
          - button "Team Size" [ref=e444] [cursor=pointer]
          - button "Registration Fee" [ref=e449] [cursor=pointer]
          - button "Duration" [ref=e454] [cursor=pointer]
          - button "Problem Statements" [ref=e459] [cursor=pointer]
          - button "Refund Policy" [ref=e464] [cursor=pointer]
          - button "Submission Requirements" [ref=e469] [cursor=pointer]
      - generic [ref=e473]:
        - generic [ref=e474]:
          - heading "Before You Climb" [level=2] [ref=e475]
          - heading "FAQ" [level=3] [ref=e476]
        - generic [ref=e477]:
          - generic [ref=e478]:
            - button "What is the prize pool?" [expanded] [ref=e479] [cursor=pointer]
            - paragraph [ref=e485]: The total prize pool will be revealed later.
          - button "Is the ticket fee refundable?" [ref=e487] [cursor=pointer]
          - button "How long is the hackathon?" [ref=e492] [cursor=pointer]
          - button "When will the problem statements be released?" [ref=e497] [cursor=pointer]
          - button "Where is the hackathon being conducted?" [ref=e502] [cursor=pointer]
          - button "Who can participate?" [ref=e507] [cursor=pointer]
          - button "How many members can a team have?" [ref=e512] [cursor=pointer]
          - button "What is the registration fee?" [ref=e517] [cursor=pointer]
          - button "What must we submit?" [ref=e522] [cursor=pointer]
          - button "Where do we submit the project?" [ref=e527] [cursor=pointer]
    - generic [ref=e536]:
      - heading "Reach The Summit" [level=2] [ref=e537]
      - heading "READY TO BUILD?" [level=3] [ref=e538]
      - paragraph [ref=e539]: 8 HOURS. ONE IDEA. MAKE IT REAL.
      - generic [ref=e540]:
        - link "Register Now ↗" [ref=e541] [cursor=pointer]:
          - /url: https://forms.gle/1E3cZtYEpjZnt9dm6
          - generic [ref=e542]:
            - text: Register Now
            - generic [ref=e543]: ↗
        - button "Back to Top ↑" [ref=e545]
    - generic [ref=e548]:
      - generic [ref=e549]:
        - generic [ref=e550]: NeuronX26
        - generic [ref=e551]: 8-HOUR HACKATHON
        - generic [ref=e552]: © 2026 Neuro X Mind
      - generic [ref=e554] [cursor=pointer]:
        - img "Mukesh" [ref=e556]
        - generic [ref=e557]:
          - generic [ref=e558]:
            - generic [ref=e559]: Mukesh
            - generic [ref=e560]: Organizer • Neuro X Mind / NeuronX26
          - generic [ref=e561]:
            - link "@neuro_x_mind_" [ref=e562]:
              - /url: https://instagram.com/neuro_x_mind_/
            - link "+91 79043 36751" [ref=e566]:
              - /url: tel:+917904336751
            - link "neuroxmind2026@gmail.com" [ref=e569]:
              - /url: mailto:neuroxmind2026@gmail.com
      - generic [ref=e573]:
        - generic [ref=e574]:
          - generic [ref=e575]:
            - generic [ref=e576]: Community Partner
            - img "DIU Foundry" [ref=e577]
            - generic [ref=e578]: DIU Foundry
          - generic [ref=e579]:
            - generic [ref=e580]: Supporting Partner
            - generic [ref=e581]: Amirtha Jewellery
        - generic [ref=e582]:
          - generic [ref=e583]: Links
          - link "VIEW VENUE ↗" [ref=e584] [cursor=pointer]:
            - /url: https://maps.app.goo.gl/abi3y8AnDBKfNJ8ir8?g_st=aw
          - link "Registration Form ↗" [ref=e585] [cursor=pointer]:
            - /url: https://forms.gle/1E3cZtYEpjZnt9dm6
  - alert [ref=e586]
```

# Test source

```ts
  75  |     await expect(page.getByText("iD Freshfood").first()).toBeVisible();
  76  |   });
  77  | 
  78  |   test("09 & 26: Venue destination link is correct and opens externally", async ({ page }) => {
  79  |     const venueLink = "https://maps.app.goo.gl/abi3y8AnDBKfNJ8ir8?g_st=aw";
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
  153 |     await expect(factsSection).toContainText("View on Google Maps");
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
> 175 |       const hasOverflow = await page.evaluate(() => {
      |                                      ^ Error: page.evaluate: Test timeout of 30000ms exceeded.
  176 |         return document.documentElement.scrollWidth > window.innerWidth;
  177 |       });
  178 |       expect(hasOverflow, `Viewport ${vp.width}x${vp.height} has horizontal overflow`).toBeFalsy();
  179 |     }
  180 |   });
  181 | 
  182 |   test("24: 3D Card Carousel navigation functions without error", async ({ page }) => {
  183 |     const nextBtn = page.locator('button[aria-label="Next card"]');
  184 |     await expect(nextBtn).toBeVisible();
  185 |     await nextBtn.click();
  186 |     await page.waitForTimeout(300);
  187 | 
  188 |     const prevBtn = page.locator('button[aria-label="Previous card"]');
  189 |     await expect(prevBtn).toBeVisible();
  190 |     await prevBtn.click();
  191 |     await page.waitForTimeout(300);
  192 |   });
  193 | 
  194 |   test("23: No browser console errors occur during navigation", async ({ page }) => {
  195 |     const errors: string[] = [];
  196 |     page.on("console", (msg) => {
  197 |       if (msg.type() === "error") {
  198 |         errors.push(msg.text());
  199 |       }
  200 |     });
  201 | 
  202 |     await page.goto("/");
  203 |     await page.waitForTimeout(1500);
  204 | 
  205 |     // Filter out potential non-critical browser/extension logs if any
  206 |     const criticalErrors = errors.filter(
  207 |       (e) => !e.includes("favicon") && !e.includes("chrome-extension")
  208 |     );
  209 |     expect(criticalErrors.length).toBe(0);
  210 |   });
  211 | });
  212 | 
```