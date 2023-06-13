const {test,expect} = require ('@playwright/test')
test('BaB test', async ({page})=>{
  await page.goto('https://staging.beta.lyka.com.au/get-started');
  
  
  await page.pause();

  
  await page.locator('//input[@id="dogNameInput-1"]').click
  await page.locator('//input[@id="dogNameInput-1"]').type('Levis');
  await page.locator('button', { name: 'Next Next' }).click();
  //await page.locator('//input[@id="dogNameInput-1"]').fill('Levi');

//await page.getByPlaceholder('Enter your pupper\'s name').fill('Lei');
  //span[@class='button-text whitespace-nowrap regular-font']
  //span[@class='button-text whitespace-nowrap regular-font'])[1]
  //button[@title='Next']
  //await page.locator('button', { name: 'Next Next' }).first().click();
  //await page.locator('div:nth-child(1) button',{ name: 'Next Next' }).click()
  //await page.locator('button', { name: 'Next Next' }).click(50);
 // await page.click('button', {timeout: 20000});
 // await page.locator('//button[@title="Next"]').click('button', {timeout: 10000});
 //if (await page.locator('modal-selector').isEnabled()) {
 // await page.click('button1')
//} else {
  //do something
//}
 //if (await page.locator('//button[@title="Next"]').isEnabled()==true) {
 // await page.click('//button[@title="Next"]')
//} else {
 //console.log('unable to locate')
//}
  //const ele = page.locator('//button[@title="Next"]'); await ele.waitFor({state: "visible"}).click('button', {timeout: 9000});
  //await page.click('button', {timeout: 9000});

 // await page.frameLocator('//*[@id="get-started-page"]/div[4]/div/form/div[3]/button');
  //await page.locator('button').first().click()
  //await page.pause();
  //await page.click('button', {timeout: 9000});
  //if (await page.locator('(//input[@id="postcodeInput"])[1]').isEnabled()) {
 // await page.locator.click();
//} else {
 //console.log('unable to locate')
//}

//await page.click('(//input[@id="postcodeInput"])[1]', {timeout: 9000});
  await page.locator('(//input[@id="postcodeInput"])[1]').click();
  await page.locator('(//input[@id="postcodeInput"])[1]').fill('2000');
  await page.getByRole('button', { name: 'Next Next' }).click();
  //div[@class='btn button-inactive text-secondary shadow-none w-100 text-center btn-lg button-active']
  await page.getByText("Boy",{ exact:true}).click();
  await page.locator('button', { name: 'Next Next' }).click();
  await page.locator('//span[@class="title"]').filter({ hasText: 'Pure Breed' }).click();
  //div[@class='btn button-inactive text-secondary shadow-none w-100 text-center btn-lg button-active no-border-radius no-border-radius-right']
  await page.getByPlaceholder('Select a breed').click();
  await page.getByPlaceholder('Select a breed').fill('ha');
  await page.getByText('American Hairless Terrier').click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.locator('#dogAge-years-1').click();
  await page.locator('#dogAge-years-1').fill('2');
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByPlaceholder('Enter your dog\'s weight').click();
  await page.getByPlaceholder('Enter your dog\'s weight').fill('4');
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByText('A bit slim Skinny waist with visible ribs').first().click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Out and about - 1-2 walks a day' }).click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByText('Can be choosy Variety is the spice of life').first().click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.locator('//div[@class="row justify-content-center"]//div[2]//div[1]//img[1]').first().click();
 // # scrolling down, negative is scrolling up)
            page.mouse.wheel(0, 15000)
        
       
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByText('Yes').click();
  //await page.locator('div').filter({ hasText: 'Yes' }).click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByText('IBD/Gastrointestinal').click();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill('Aparna');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('aparna111@mail.com');
  await page.getByRole('button', { name: 'Show tailored meal plan Show tailored meal plan' }).click();
  await page.locator('//button[@title="Continue to pricing options"]').click();
  await page.locator ('(//a[@class="btn shadow-none button-border theme-primary btn-lg btn-roll-effect"])[5]').click();
  
  await page.locator ('(//span[normalize-space()="Skip extras and continue"])[1]').click();
  await page.locator('(//input[@id="firstname"])[1]').click();
  await page.locator('(//input[@id="firstname"])[1]').fill('sam');
  //await page.mouse.wheel(0, 4000)
   //page.locator('//div[@class="slick-slide"]//div//div//a[@class="btn shadow-none button-border theme-primary btn-lg btn-roll-effect"]')
  
   //page.locator('(//a[@text="Skip treats")[1]');
  //await page.locator('$("div[class="slick-slide slick-active"] div div span[class="regular-font"]")');
 // await page.click('(//span[@class="regular-font"][normalize-space()="Try Half Bowl plan"])[1]', {timeout: 10000});

  //await page.getByTitle('Full bowl subscription - $151.20').first().click();
  // await page.mouse.wheel(0, 6000)
 // await locator.scrollIntoViewIfNeeded();
  //await page.locator('//input[@id="lastname"])[1]').isVisible;
  //is_visible();
       // page.mouse.wheel(0,1000)
      //  #page.keyboard.down(PageDown) also works
  await page.locator('//input[@id="lastname"]').click();
  await page.getByPlaceholder('Enter Last name').fill('rani');
  await page.getByPlaceholder('Mobile number').click();
  await page.getByPlaceholder('Mobile number').fill('0435675432');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').press('CapsLock');
  await page.getByPlaceholder('Enter password').fill('Pass678');
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').press('CapsLock');
  await page.getByPlaceholder('Confirm password').fill('Pass678');
  await page.getByPlaceholder('Enter Address').click();
  await page.getByPlaceholder('Enter Address').fill('hana');
  await page.getByText('6 Hanalei Avenue, CHITTAWAY BAY NSW 2261');

  const stripeIframe = await page.waitForSelector('iframe')
const stripeFrame = await stripeIframe.contentFrame()

const cardNumInput = await stripeFrame.waitForSelector('input[name="cardnumber"]')

// @NOTE card no must be filled for rest of input fields to appear with
// appropriate [name] attributes.
await cardNumInput.fill('4242424242424242')

const cardExpInput = await stripeFrame.waitForSelector('input[name="exp-date"]')
await cardExpInput.fill('0427')
const cardCVCInput = await stripeFrame.waitForSelector('input[name="cvc"]')
await cardCVCInput.fill('234')
const cardZipInput = await stripeFrame.waitForSelector('input[name="postal"]')
await cardZipInput.fill('45632')

//await cardExpInput.fill('12/50')
//await cardCVCInput.fill('123')
//await cardZipInput.fill('99999')
  //await page.frameLocator('iframe[name="__privateStripeFrame0716"]').getByPlaceholder('Card number').click();
 // await page.frameLocator('iframe[name="__privateStripeFrame0716"]').getByPlaceholder('Card number').fill('4242 4242 4242 4242');
 // await page.frameLocator('iframe[name="__privateStripeFrame0716"]').getByPlaceholder('MM / YY').fill('04 / 28');
 // await page.frameLocator('iframe[name="__privateStripeFrame0716"]').getByPlaceholder('CVC').fill('889');
 // await page.frameLocator('iframe[name="__privateStripeFrame0716"]').getByPlaceholder('ZIP').fill('76289');
  await page.getByRole('button', { name: 'Confirm and pay' }).click();

  // ---------------------
 // await context.close();
 // await browser.close();*/
});