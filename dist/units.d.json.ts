/**
 * Defines the suffix used in the OSM tag value for every unit of measurement. If there are multiple values, the first one will be preferred.
 */
export interface Units {
  area?: {
    /**
     * @minItems 1
     */
    "square-kilometer"?: string[]
    /**
     * @minItems 1
     */
    hectare?: string[]
    /**
     * @minItems 1
     */
    "square-meter"?: string[]
    /**
     * @minItems 1
     */
    "square-centimeter"?: string[]
    /**
     * @minItems 1
     */
    "square-mile"?: string[]
    /**
     * @minItems 1
     */
    acre?: string[]
    /**
     * @minItems 1
     */
    "square-foot"?: string[]
    /**
     * @minItems 1
     */
    "square-inch"?: string[]
    /**
     * @minItems 1
     */
    "square-yard"?: string[]
    /**
     * @minItems 1
     */
    dunam?: string[]
    /**
     * @minItems 1
     */
    "bu-jp"?: string[]
    /**
     * @minItems 1
     */
    "se-jp"?: string[]
    /**
     * @minItems 1
     */
    cho?: string[]
  }
  concentration?: {
    /**
     * @minItems 1
     */
    "milligram-ofglucose-per-deciliter"?: string[]
    /**
     * @minItems 1
     */
    "millimole-per-liter"?: string[]
    /**
     * @minItems 1
     */
    "item-per-cubic-meter"?: string[]
  }
  consumption?: {
    /**
     * @minItems 1
     */
    "liter-per-100-kilometer"?: string[]
    /**
     * @minItems 1
     */
    "liter-per-kilometer"?: string[]
    /**
     * @minItems 1
     */
    "mile-per-gallon-imperial"?: string[]
    /**
     * @minItems 1
     */
    "mile-per-gallon"?: string[]
  }
  duration?: {
    /**
     * @minItems 1
     */
    day?: string[]
    /**
     * @minItems 1
     */
    hour?: string[]
    /**
     * @minItems 1
     */
    minute?: string[]
    /**
     * @minItems 1
     */
    second?: string[]
    /**
     * @minItems 1
     */
    millisecond?: string[]
    /**
     * @minItems 1
     */
    microsecond?: string[]
    /**
     * @minItems 1
     */
    nanosecond?: string[]
    /**
     * @minItems 1
     */
    "minute-and-second"?: string[]
    /**
     * @minItems 1
     */
    century?: string[]
    /**
     * @minItems 1
     */
    decade?: string[]
    /**
     * @minItems 1
     */
    year?: string[]
    /**
     * @minItems 1
     */
    quarter?: string[]
    /**
     * @minItems 1
     */
    month?: string[]
    /**
     * @minItems 1
     */
    week?: string[]
    /**
     * @minItems 1
     */
    fortnight?: string[]
    /**
     * @minItems 1
     */
    night?: string[]
  }
  energy?: {
    /**
     * @minItems 1
     */
    "kilowatt-hour"?: string[]
    /**
     * @minItems 1
     */
    kilocalorie?: string[]
    /**
     * @minItems 1
     */
    foodcalorie?: string[]
    /**
     * @minItems 1
     */
    calorie?: string[]
    /**
     * @minItems 1
     */
    kilojoule?: string[]
    /**
     * @minItems 1
     */
    joule?: string[]
    /**
     * @minItems 1
     */
    electronvolt?: string[]
    /**
     * @minItems 1
     */
    "british-thermal-unit"?: string[]
    /**
     * @minItems 1
     */
    "therm-us"?: string[]
    /**
     * @minItems 1
     */
    "calorie-it"?: string[]
    /**
     * @minItems 1
     */
    "british-thermal-unit-it"?: string[]
    /**
     * @minItems 1
     */
    becquerel?: string[]
    /**
     * @minItems 1
     */
    sievert?: string[]
    /**
     * @minItems 1
     */
    gray?: string[]
  }
  length?: {
    /**
     * @minItems 1
     */
    kilometer?: string[]
    /**
     * @minItems 1
     */
    meter?: string[]
    /**
     * @minItems 1
     */
    centimeter?: string[]
    /**
     * @minItems 1
     */
    mile?: string[]
    /**
     * @minItems 1
     */
    foot?: string[]
    /**
     * @minItems 1
     */
    inch?: string[]
    /**
     * @minItems 1
     */
    millimeter?: string[]
    /**
     * @minItems 1
     */
    "meter-and-centimeter"?: string[]
    /**
     * @minItems 1
     */
    "foot-and-inch"?: string[]
    /**
     * @minItems 1
     */
    yard?: string[]
    /**
     * @minItems 1
     */
    "mile-scandinavian"?: string[]
    /**
     * @minItems 1
     */
    "earth-radius"?: string[]
    /**
     * @minItems 1
     */
    decimeter?: string[]
    /**
     * @minItems 1
     */
    micrometer?: string[]
    /**
     * @minItems 1
     */
    nanometer?: string[]
    /**
     * @minItems 1
     */
    picometer?: string[]
    /**
     * @minItems 1
     */
    parsec?: string[]
    /**
     * @minItems 1
     */
    "light-year"?: string[]
    /**
     * @minItems 1
     */
    "astronomical-unit"?: string[]
    /**
     * @minItems 1
     */
    furlong?: string[]
    /**
     * @minItems 1
     */
    fathom?: string[]
    /**
     * @minItems 1
     */
    "nautical-mile"?: string[]
    /**
     * @minItems 1
     */
    point?: string[]
    /**
     * @minItems 1
     */
    "solar-radius"?: string[]
    /**
     * @minItems 1
     */
    rod?: string[]
    /**
     * @minItems 1
     */
    chain?: string[]
    /**
     * @minItems 1
     */
    rin?: string[]
    /**
     * @minItems 1
     */
    sun?: string[]
    /**
     * @minItems 1
     */
    "shaku-length"?: string[]
    /**
     * @minItems 1
     */
    "shaku-cloth"?: string[]
    /**
     * @minItems 1
     */
    ken?: string[]
    /**
     * @minItems 1
     */
    "jo-jp"?: string[]
    /**
     * @minItems 1
     */
    "ri-jp"?: string[]
  }
  mass?: {
    /**
     * @minItems 1
     */
    tonne?: string[]
    /**
     * @minItems 1
     */
    kilogram?: string[]
    /**
     * @minItems 1
     */
    gram?: string[]
    /**
     * @minItems 1
     */
    milligram?: string[]
    /**
     * @minItems 1
     */
    microgram?: string[]
    /**
     * @minItems 1
     */
    ton?: string[]
    /**
     * @minItems 1
     */
    pound?: string[]
    /**
     * @minItems 1
     */
    ounce?: string[]
    /**
     * @minItems 1
     */
    "stone-and-pound"?: string[]
    /**
     * @minItems 1
     */
    "pound-and-ounce"?: string[]
    /**
     * @minItems 1
     */
    stone?: string[]
    /**
     * @minItems 1
     */
    "ounce-troy"?: string[]
    /**
     * @minItems 1
     */
    carat?: string[]
    /**
     * @minItems 1
     */
    dalton?: string[]
    /**
     * @minItems 1
     */
    "earth-mass"?: string[]
    /**
     * @minItems 1
     */
    "solar-mass"?: string[]
    /**
     * @minItems 1
     */
    grain?: string[]
    /**
     * @minItems 1
     */
    slug?: string[]
    /**
     * @minItems 1
     */
    fun?: string[]
  }
  "mass-density"?: {
    /**
     * @minItems 1
     */
    "kilogram-per-cubic-meter"?: string[]
  }
  power?: {
    /**
     * @minItems 1
     */
    gigawatt?: string[]
    /**
     * @minItems 1
     */
    megawatt?: string[]
    /**
     * @minItems 1
     */
    kilowatt?: string[]
    /**
     * @minItems 1
     */
    watt?: string[]
    /**
     * @minItems 1
     */
    milliwatt?: string[]
    /**
     * @minItems 1
     */
    horsepower?: string[]
  }
  pressure?: {
    /**
     * @minItems 1
     */
    hectopascal?: string[]
    /**
     * @minItems 1
     */
    millibar?: string[]
    /**
     * @minItems 1
     */
    "millimeter-ofhg"?: string[]
    /**
     * @minItems 1
     */
    "inch-ofhg"?: string[]
    /**
     * @minItems 1
     */
    megapascal?: string[]
    /**
     * @minItems 1
     */
    pascal?: string[]
    /**
     * @minItems 1
     */
    "pound-force-per-square-inch"?: string[]
    /**
     * @minItems 1
     */
    ofhg?: string[]
    /**
     * @minItems 1
     */
    bar?: string[]
    /**
     * @minItems 1
     */
    atmosphere?: string[]
    /**
     * @minItems 1
     */
    kilopascal?: string[]
    /**
     * @minItems 1
     */
    "gasoline-energy-density"?: string[]
  }
  speed?: {
    /**
     * @minItems 1
     */
    "kilometer-per-hour"?: string[]
    /**
     * @minItems 1
     */
    "mile-per-hour"?: string[]
    /**
     * @minItems 1
     */
    "millimeter-per-hour"?: string[]
    /**
     * @minItems 1
     */
    "centimeter-per-hour"?: string[]
    /**
     * @minItems 1
     */
    "inch-per-hour"?: string[]
    /**
     * @minItems 1
     */
    "meter-per-second"?: string[]
    /**
     * @minItems 1
     */
    knot?: string[]
    /**
     * @minItems 1
     */
    beaufort?: string[]
    /**
     * @minItems 1
     */
    "light-speed"?: string[]
  }
  temperature?: {
    /**
     * @minItems 1
     */
    celsius?: string[]
    /**
     * @minItems 1
     */
    fahrenheit?: string[]
    /**
     * @minItems 1
     */
    generic?: string[]
    /**
     * @minItems 1
     */
    kelvin?: string[]
    /**
     * @minItems 1
     */
    rankine?: string[]
  }
  volume?: {
    /**
     * @minItems 1
     */
    "cubic-meter"?: string[]
    /**
     * @minItems 1
     */
    "cubic-centimeter"?: string[]
    /**
     * @minItems 1
     */
    "cubic-foot"?: string[]
    /**
     * @minItems 1
     */
    "cubic-inch"?: string[]
    /**
     * @minItems 1
     */
    liter?: string[]
    /**
     * @minItems 1
     */
    milliliter?: string[]
    /**
     * @minItems 1
     */
    "gallon-imperial"?: string[]
    /**
     * @minItems 1
     */
    "fluid-ounce-imperial"?: string[]
    /**
     * @minItems 1
     */
    gallon?: string[]
    /**
     * @minItems 1
     */
    quart?: string[]
    /**
     * @minItems 1
     */
    pint?: string[]
    /**
     * @minItems 1
     */
    cup?: string[]
    /**
     * @minItems 1
     */
    "fluid-ounce"?: string[]
    /**
     * @minItems 1
     */
    tablespoon?: string[]
    /**
     * @minItems 1
     */
    teaspoon?: string[]
    /**
     * @minItems 1
     */
    barrel?: string[]
    /**
     * @minItems 1
     */
    "cubic-kilometer"?: string[]
    /**
     * @minItems 1
     */
    "cubic-mile"?: string[]
    /**
     * @minItems 1
     */
    "cubic-yard"?: string[]
    /**
     * @minItems 1
     */
    megaliter?: string[]
    /**
     * @minItems 1
     */
    hectoliter?: string[]
    /**
     * @minItems 1
     */
    deciliter?: string[]
    /**
     * @minItems 1
     */
    centiliter?: string[]
    /**
     * @minItems 1
     */
    "pint-metric"?: string[]
    /**
     * @minItems 1
     */
    "cup-metric"?: string[]
    /**
     * @minItems 1
     */
    "fluid-ounce-metric"?: string[]
    /**
     * @minItems 1
     */
    "acre-foot"?: string[]
    /**
     * @minItems 1
     */
    bushel?: string[]
    /**
     * @minItems 1
     */
    "pint-imperial"?: string[]
    /**
     * @minItems 1
     */
    "cup-imperial"?: string[]
    /**
     * @minItems 1
     */
    "dessert-spoon"?: string[]
    /**
     * @minItems 1
     */
    "dessert-spoon-imperial"?: string[]
    /**
     * @minItems 1
     */
    drop?: string[]
    /**
     * @minItems 1
     */
    dram?: string[]
    /**
     * @minItems 1
     */
    jigger?: string[]
    /**
     * @minItems 1
     */
    pinch?: string[]
    /**
     * @minItems 1
     */
    "quart-imperial"?: string[]
    /**
     * @minItems 1
     */
    kosaji?: string[]
    /**
     * @minItems 1
     */
    osaji?: string[]
    /**
     * @minItems 1
     */
    "cup-jp"?: string[]
    /**
     * @minItems 1
     */
    shaku?: string[]
    /**
     * @minItems 1
     */
    sai?: string[]
    /**
     * @minItems 1
     */
    "to-jp"?: string[]
    /**
     * @minItems 1
     */
    koku?: string[]
  }
  "year-duration"?: {
    /**
     * @minItems 1
     */
    year?: string[]
    /**
     * @minItems 1
     */
    month?: string[]
    /**
     * @minItems 1
     */
    "year-person"?: string[]
    /**
     * @minItems 1
     */
    "year-person-and-month-person"?: string[]
    /**
     * @minItems 1
     */
    "month-person"?: string[]
  }
  acceleration?: {
    /**
     * @minItems 1
     */
    "g-force"?: string[]
    /**
     * @minItems 1
     */
    "meter-per-square-second"?: string[]
  }
  angle?: {
    /**
     * @minItems 1
     */
    revolution?: string[]
    /**
     * @minItems 1
     */
    radian?: string[]
    /**
     * @minItems 1
     */
    degree?: string[]
    /**
     * @minItems 1
     */
    "arc-minute"?: string[]
    /**
     * @minItems 1
     */
    "arc-second"?: string[]
    /**
     * @minItems 1
     */
    steradian?: string[]
  }
  concentr?: {
    /**
     * @minItems 1
     */
    karat?: string[]
    /**
     * @minItems 1
     */
    "milligram-ofglucose-per-deciliter"?: string[]
    /**
     * @minItems 1
     */
    "millimole-per-liter"?: string[]
    /**
     * @minItems 1
     */
    item?: string[]
    /**
     * @minItems 1
     */
    part?: string[]
    /**
     * @minItems 1
     */
    "part-per-1e6"?: string[]
    /**
     * @minItems 1
     */
    percent?: string[]
    /**
     * @minItems 1
     */
    permille?: string[]
    /**
     * @minItems 1
     */
    permyriad?: string[]
    /**
     * @minItems 1
     */
    mole?: string[]
    /**
     * @minItems 1
     */
    ofglucose?: string[]
    /**
     * @minItems 1
     */
    katal?: string[]
    /**
     * @minItems 1
     */
    "part-per-1e9"?: string[]
  }
  digital?: {
    /**
     * @minItems 1
     */
    petabyte?: string[]
    /**
     * @minItems 1
     */
    terabyte?: string[]
    /**
     * @minItems 1
     */
    terabit?: string[]
    /**
     * @minItems 1
     */
    gigabyte?: string[]
    /**
     * @minItems 1
     */
    gigabit?: string[]
    /**
     * @minItems 1
     */
    megabyte?: string[]
    /**
     * @minItems 1
     */
    megabit?: string[]
    /**
     * @minItems 1
     */
    kilobyte?: string[]
    /**
     * @minItems 1
     */
    kilobit?: string[]
    /**
     * @minItems 1
     */
    byte?: string[]
    /**
     * @minItems 1
     */
    bit?: string[]
  }
  electric?: {
    /**
     * @minItems 1
     */
    ampere?: string[]
    /**
     * @minItems 1
     */
    milliampere?: string[]
    /**
     * @minItems 1
     */
    ohm?: string[]
    /**
     * @minItems 1
     */
    volt?: string[]
    /**
     * @minItems 1
     */
    coulomb?: string[]
    /**
     * @minItems 1
     */
    farad?: string[]
    /**
     * @minItems 1
     */
    henry?: string[]
    /**
     * @minItems 1
     */
    siemens?: string[]
  }
  force?: {
    /**
     * @minItems 1
     */
    "pound-force"?: string[]
    /**
     * @minItems 1
     */
    newton?: string[]
    /**
     * @minItems 1
     */
    "kilowatt-hour-per-100-kilometer"?: string[]
    /**
     * @minItems 1
     */
    "kilogram-force"?: string[]
  }
  frequency?: {
    /**
     * @minItems 1
     */
    gigahertz?: string[]
    /**
     * @minItems 1
     */
    megahertz?: string[]
    /**
     * @minItems 1
     */
    kilohertz?: string[]
    /**
     * @minItems 1
     */
    hertz?: string[]
  }
  graphics?: {
    /**
     * @minItems 1
     */
    em?: string[]
    /**
     * @minItems 1
     */
    pixel?: string[]
    /**
     * @minItems 1
     */
    megapixel?: string[]
    /**
     * @minItems 1
     */
    "pixel-per-centimeter"?: string[]
    /**
     * @minItems 1
     */
    "pixel-per-inch"?: string[]
    /**
     * @minItems 1
     */
    "dot-per-centimeter"?: string[]
    /**
     * @minItems 1
     */
    "dot-per-inch"?: string[]
    /**
     * @minItems 1
     */
    dot?: string[]
  }
  light?: {
    /**
     * @minItems 1
     */
    lux?: string[]
    /**
     * @minItems 1
     */
    candela?: string[]
    /**
     * @minItems 1
     */
    lumen?: string[]
    /**
     * @minItems 1
     */
    "solar-luminosity"?: string[]
  }
  torque?: {
    /**
     * @minItems 1
     */
    "pound-force-foot"?: string[]
    /**
     * @minItems 1
     */
    "newton-meter"?: string[]
  }
  magnetic?: {
    /**
     * @minItems 1
     */
    tesla?: string[]
    /**
     * @minItems 1
     */
    weber?: string[]
  }
}


declare const json: Units;
export default json;
