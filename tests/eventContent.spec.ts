import { test, expect } from "@playwright/test";

test.describe("NeuronX26 Content, Configuration & UX Validations", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage and wait until network is idle
    await page.goto("/", { waitUntil: "domcontentloaded" });
  });

  test("01 & 02: Event name and community information are correct", async ({ page }) => {
    // Event name NeuronX26
    await expect(page).toHaveTitle(/NeuronX26/);
    const heroTitle = page.locator("h1");
    await expect(heroTitle).toContainText("NeuronX26");

    // Community Neuro X Mind
    const communityName = page.getByText("Neuro X Mind").first();
    await expect(communityName).toBeVisible();

    // Community description
    const descText = "Neuro X Mind is a student builder community where curious minds come together to learn, experiment, and turn ideas into working products";
    await expect(page.locator("body")).toContainText(descText);
  });

  test("03: Duration is 8-Hour Hackathon with zero 12-hour references", async ({ page }) => {
    // 8-hour hackathon visible in Hero and facts
    await expect(page.locator("body")).toContainText("8-HOUR HACKATHON");
    await expect(page.locator("body")).toContainText("8-Hour Timeline");
    await expect(page.locator("body")).toContainText("Eight hours");

    // Zero 12-hour references in visible body
    const bodyText = await page.innerText("body");
    expect(bodyText).not.toMatch(/12-hour/i);
    expect(bodyText).not.toMatch(/12 hour/i);
    expect(bodyText).not.toMatch(/twelve hours/i);

    // Zero Nexoran references
    expect(bodyText).not.toMatch(/nexoran/i);
    expect(bodyText).not.toMatch(/neuronx'26/i);
  });

  test("04: Event date is October 3", async ({ page }) => {
    const dateElements = page.getByText(/October 3/i);
    await expect(dateElements.first()).toBeVisible();
  });

  test("05: Organizer contact information is correct", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Mukesh");
    await expect(page.locator("body")).toContainText("+91 79043 36751");
    await expect(page.locator("body")).toContainText("neuroxmind2026@gmail.com");

    const igLink = page.locator('a[href*="instagram.com/neuro_x_mind_"]');
    await expect(igLink.first()).toBeVisible();

    // Ensure old email does not exist
    const bodyContent = await page.content();
    expect(bodyContent).not.toContain("diufoundry@gmail.com");
  });

  test("06 & 07: Partners are correctly labeled and displayed", async ({ page }) => {
    // Community Partner DIU Foundry
    const communityPartnerLabel = page.getByText("COMMUNITY PARTNER").first();
    await expect(communityPartnerLabel).toBeVisible();
    await expect(page.locator("body")).toContainText("DIU Foundry");

    // Supporting Partner Amirtha Jewellery
    const supportingPartnerLabel = page.getByText("SUPPORTING PARTNER").first();
    await expect(supportingPartnerLabel).toBeVisible();
    await expect(page.locator("body")).toContainText("Amirtha Jewellery");
  });

  test("08: Judge information is accurate without fabricated content", async ({ page }) => {
    await expect(page.getByText("Ganesan Ravichandran")).toBeVisible();
    await expect(page.getByText("MCA").first()).toBeVisible();
    await expect(page.getByText("IT — Senior Manager").first()).toBeVisible();
    await expect(page.getByText("iD Freshfood").first()).toBeVisible();
  });

  test("09 & 26: Venue destination link is correct and opens externally", async ({ page }) => {
    const venueLink = "https://maps.app.goo.gl/abi3y8AnDBKfNJ8ir8?g_st=aw";
    const venueAnchor = page.locator(`a[href="${venueLink}"]`).first();
    await expect(venueAnchor).toBeVisible();
    await expect(venueAnchor).toHaveAttribute("target", "_blank");
    await expect(venueAnchor).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("10, 11 & 12: Problem statements are locked with release policy displayed", async ({ page }) => {
    const releaseText = "Problem statements will be revealed one day before the hackathon.";
    await expect(page.locator("body")).toContainText(releaseText);

    // Cards should show locked indicators
    const lockedPills = page.getByText("LOCKED");
    expect(await lockedPills.count()).toBeGreaterThan(0);

    // Track cards exist in 3D carousel
    const trackCard = page.getByText("TRACK 01").first();
    await expect(trackCard).toBeVisible();

    // Sensitive unrevealed titles should not be visible
    const unrevealedTitle = "Forty Listings Open, Still No Idea Which One's Real";
    const pageContent = await page.content();
    expect(pageContent).not.toContain(unrevealedTitle);
  });

  test("16, 17, 18, 19, 28 & 29: Prize pool is secret/classified with ZERO numbers", async ({ page }) => {
    // Classified / secret display text
    const classifiedText = page.getByText("CLASSIFIED").first();
    await expect(classifiedText).toBeVisible();
    await expect(page.locator("body")).toContainText("The total prize pool will be revealed later.");

    // Absolutely zero numerical prize amounts
    const pageContent = await page.content();
    expect(pageContent).not.toContain("₹15,000");
    expect(pageContent).not.toContain("15,000");
    expect(pageContent).not.toContain("₹20,000");
    expect(pageContent).not.toContain("20,000");
    expect(pageContent).not.toContain("₹8,000");
    expect(pageContent).not.toContain("8,000");

    // No prize counter counting from 0
    const bodyText = await page.innerText("body");
    expect(bodyText).not.toMatch(/₹\s*0/);
  });

  test("22, 23, 24, 25: FAQ policies are strictly answered", async ({ page }) => {
    // Prize FAQ (open by default as index 0)
    await expect(page.locator("body")).toContainText("What is the prize pool?");
    await expect(page.locator("body")).toContainText("The total prize pool will be revealed later.");

    // Refund FAQ (click to expand)
    const refundBtn = page.getByRole("button", { name: "Is the ticket fee refundable?" });
    await expect(refundBtn).toBeVisible();
    await refundBtn.click();
    await expect(page.locator("body")).toContainText("No. The ticket fee is non-refundable.");

    // Duration FAQ (click to expand)
    const durationBtn = page.getByRole("button", { name: "How long is the hackathon?" });
    await expect(durationBtn).toBeVisible();
    await durationBtn.click();
    await expect(page.locator("body")).toContainText("NeuronX26 is an 8-hour hackathon.");

    // Release FAQ (click to expand)
    const releaseBtn = page.getByRole("button", { name: "When will the problem statements be released?" });
    await expect(releaseBtn).toBeVisible();
    await releaseBtn.click();
    await expect(page.locator("body")).toContainText("The problem statements will be revealed one day before the hackathon.");
  });

  test("31: Event facts bar displays key parameters", async ({ page }) => {
    const factsSection = page.locator("section").filter({ hasText: "DATE" }).first();
    await expect(factsSection).toContainText("October 3");
    await expect(factsSection).toContainText("8 Hours");
    await expect(factsSection).toContainText("Revealing Soon");
    await expect(factsSection).toContainText("View on Google Maps");
  });

  test("20, 21, 37: Responsive layout test across viewports with no horizontal overflow", async ({ page }) => {
    const viewports = [
      { width: 320, height: 600 },
      { width: 360, height: 740 },
      { width: 375, height: 667 },
      { width: 390, height: 844 },
      { width: 414, height: 896 },
      { width: 430, height: 932 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      await page.waitForTimeout(200);

      // Check for horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasOverflow, `Viewport ${vp.width}x${vp.height} has horizontal overflow`).toBeFalsy();
    }
  });

  test("24: 3D Card Carousel navigation functions without error", async ({ page }) => {
    const nextBtn = page.locator('button[aria-label="Next card"]');
    await expect(nextBtn).toBeVisible();
    await nextBtn.click();
    await page.waitForTimeout(300);

    const prevBtn = page.locator('button[aria-label="Previous card"]');
    await expect(prevBtn).toBeVisible();
    await prevBtn.click();
    await page.waitForTimeout(300);
  });

  test("23: No browser console errors occur during navigation", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");
    await page.waitForTimeout(1500);

    // Filter out potential non-critical browser/extension logs if any
    const criticalErrors = errors.filter(
      (e) => !e.includes("favicon") && !e.includes("chrome-extension")
    );
    expect(criticalErrors.length).toBe(0);
  });
});
