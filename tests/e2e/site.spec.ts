import { expect, test } from '@playwright/test'

test('home page renders expected hero content', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      name: 'Maxi Gimenez — engineering leader building resilient products and teams.',
    }),
  ).toBeVisible()

  await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible()
})

test('can navigate to blog and open a blog post', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Blog' }).first().click()

  await expect(page).toHaveURL(/\/blog$/)
  await expect(page.getByRole('heading', { name: 'All posts' })).toBeVisible()

  await page
    .getByRole('link', { name: /Why Every Startup Should Build a Component Library/i })
    .click()

  await expect(page).toHaveURL(/\/post\/every-startup-needs-component-library$/)
  await expect(
    page.getByRole('heading', {
      name: 'Why Every Startup Should Build a Component Library',
    }),
  ).toBeVisible()
})
