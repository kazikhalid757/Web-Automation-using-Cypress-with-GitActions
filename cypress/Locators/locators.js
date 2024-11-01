class locatorsPage {
  
  arrow =  "//div[@class='summary']" 
  resone_name = "//li[normalize-space()='Bangladesh' and contains(@class, 'active')]"
  currency = "//li[normalize-space()='BDT' and contains(@class,'active')]"
  tour = "//span[@class='product'][normalize-space()='Tour']"
  serch_option ="//span[@class='label']"
  search_input ="//input[@id='searchString']"
  select = "//div[@class='name'][normalize-space()='Sundarbans']"
  search_button = "//button[normalize-space()='Search']"
  khulna = "(//span[contains(text(),'Khulna')])[1]"
  show_more = "//span[@class='long']"
  Eco_tour = "//small[normalize-space()='Eco Tours']"


  tour_visa = "//span[@class='product'][normalize-space()='Visa']"
  serch_option_visa ="(//span[@class='label'])[1]"
  select_india = "//div[@class='name'][normalize-space()='India']"
  visa_page="//strong[normalize-space()='Summary']"
  summary="//strong[normalize-space()='Summary']"
  one_way="//span[normalize-space()='One Way']"
}
export default locatorsPage;