import { test } from '@playwright/test';

test("Test", async (context) => {
  await context.page.goto("https://www.google.com");
})