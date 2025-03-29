'use strict';

import './styles/style.scss';
import Swiper from 'swiper';
import 'swiper/css';

let serviceSwiper;
const loaderOverlay = document.querySelector('.loader-overlay');
loaderOverlay.style.display = 'flex';

const popup = document.querySelector('.popup__overlay');
const closePopup = document.getElementById('closePopup');

const burgerMenu = document.getElementById('burger-menu');
const burgerMenuClose = document.getElementById('closeModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalItems = document.querySelectorAll('.modal-menu__header .menu__items li a');

const head = document.querySelector('.header__languages-switcher .languages-switcher__head');
const body = document.querySelector('.header__languages-switcher .languages-switcher__body');
const languages = body?.querySelectorAll('.languages-switcher__language');

const modalHead = document.querySelector('.modal__menu .languages-switcher__head');
const modalBody = document.querySelector('.modal__menu .languages-switcher__body');
const modalLanguages = modalBody?.querySelectorAll('.modal__menu .languages-switcher__language');

const accordion = document.querySelectorAll('.questions__item');


const submitButton = document.querySelector('.action__submit');
const emailSubscriptionInput = document.querySelector('#subscription__email-input');
const emailSubscriptionLabel = document.querySelector('.subscription__email-label');

const inputs = document.querySelectorAll('.input');
const labels = document.querySelectorAll('.label');


function initServiceSwiper() {
    if (window.innerWidth > 810) {
        if (!serviceSwiper) {
            serviceSwiper = new Swiper('.services__swiper', {
                direction: "horizontal",
                loop: true,
                grabCursor: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 500,
            });
        }
    } else {
        if (serviceSwiper) {
            serviceSwiper.destroy(true, true);
            serviceSwiper = null;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
        const translations = {
            en: {
                menuItemHome: "Home",
                menuItemBlog: "Blog",
                menuItemContact: "Contact",
                mainBlockMiniTab: "household and commercial  mattress cleaning",
                mainBlockTitle: `<span class="blue-text">Your Way</span> <br class="hide-on-mobile">To Allergy Free Mattress`,
                mainBlockAddition: "Discover for yourself the revolutionary cleaning mattress machine that makes your sleep excellent and allergy free.",
                mainBlockButton: "book cleaning",
                serviceFirstTitle: `Mattress <br class="hide-on-mobile"> dry cleaning.`,
                serviceFirstDescription: "Cleaning your mattress entails utilizing specialized cleaning techniques to eliminate dust mites, bacteria, mold, and other allergens. This can lead to a notable enhancement in indoor air quality and a reduction in allergy symptoms.",
                serviceSecondTitle: `Mattress <br class="hide-on-mobile"> wet Cleaning.`,
                serviceSecondDescription: "We are using spray and extraction method with low foaming solution, if your mattress is heavily soiled, stained (pet stains, food, beverages, bodily fluids) or has odor issues. While using this method, drying times are longer (8 to 12 hours depending on air movement and indoor temperature).",
                serviceThirdTitle: "Upholstery Cleaning.",
                serviceThirdDescription: "With our deep cleaning and fast drying fabric upholstery cleaning service your furniture will be cleaner, brighter and ready for you to enjoy again! Our dual cleaning process ensures that your upholstery is not only clean but also sanitized, promoting a healthier living or working environment.",
                mitesTitle: `some facts<br class="hide-on-mobile"> about dust mites`,
                mitesText: `<ol>
                    <li><span>1. </span>We sleep an average of 7 hours a day on our mattress, 1/3 of our total lifetime is spent on it.
                        The quality mattress has a life span of up to 10-15 years on average, making it the longest used
                        piece of furniture in our home.
                    </li>
                    <li><span>2. </span>There are about 1,5 million mites, dead mites that leave their droppings, dead skin scales and
                        mold in our mattress. These elements are also found in carpets and upholstered furniture.
                    </li>
                    <li><span>3. </span>In their lifetime mites produce about 200 times the feces of their body weight.</li>
                    <li><span>4. </span>Mite droppings are small balls coated with mucus. They become fine powder which is like dust
                        and contains an allergen called guanine.
                    </li>
                    <li><span>5. </span>Guanine is known to cause allergic reactions in humans and a major cause of asthma attacks.
                        It causes inflammation of the skin and mucous membranes in the nose, as well as redness of the
                        eyes and coughing.
                    </li>
                </ol>`,
                questionsHead: `frequently <br class="hide-on-mobile"> asked Questions and Answers`,
                questionsItemTitleOne: `What is the recommended frequency <br class="hide-on-mobile"> for cleaning my mattress?`,
                questionsItemTextOne: "It is advisable to have your mattress professionally cleaned every six month. Regular cleanings can reduce dust mite accumulation and extend the longevity of your mattress.",
                questionsItemTitleTwo: "What methods are used for mattresses cleaning?",
                questionsItemTextTwo: "All our treatments are dry, chemical free and eco friendly. The mite spray is used only at the special request of the customer.",
                questionsItemTitleThree: "What if I have stains on my mattress?",
                questionsItemTextThree: "Before treatment the surface needs to be vacuumed first. After that, we sprayed low foam cleaning agent. Using powerful vacuum with spray / suction action, stains on the mattress are being removed. During this process, odour will be removed as well.",
                questionsItemTitleFour: "How long does the dry cleaning take for a mattress?",
                questionsItemTextFour: "The complete dry treatment of a standard King Size mattress takes approx. 20 minutes.",
                areasTitle: `We cover all areas <br class="hide-on-mobile"> of your living places`,
                areasItem1: "Mattresses",
                areasItem2: "Pillows",
                areasItem3: "Chairs",
                areasItem4: "Ottomans",
                areasItem5: "Recliners",
                areasItem6: "Sofas",
                reviewsTitle: "what do customers think of us",
                reviewsMoreButton: "More",
                reviewsFirstItemName: "Marek",
                reviewsFirstItemText: "Great service! After MatBlu's cleaning, our mattress looks brand new – no stains, odors, or dust. The process was quick and, most importantly, safe. Very satisfied with the result!",
                reviewsSecondItemName: "Ján",
                reviewsSecondItemText: "Thanks to MatBlu for professional cleaning! All dust, bacteria, and odors are gone, and sleeping has become much more comfortable. The service is worth every penny – highly recommend!",
                reviewsThirdItemName: "Zuzana",
                reviewsThirdItemText: "Cleanliness is a top priority for our hotel. MatBlu quickly and efficiently cleaned the mattresses without excess moisture, which is crucial for guest check-ins. We now work with them on a regular basis!",
                reviewsForthItemName: "Lenka",
                reviewsForthItemText: "As an Airbnb host, I prioritize cleanliness and guest comfort. MatBlu did an excellent job cleaning the mattresses – no stains, no odors, and no long drying time. Now my apartments are always in perfect condition!",
                bookingFormTitle: "book your cleaning",
                bookingNameLabel: "Name",
                bookingPhoneLabel: "Phone",
                bookingTextarea: "Describe your type of service and quantity",
                bookingButton: "book cleaning",
                bookingPriceFrom: "from",
                bookingHousehold: "Household",
                bookingMotels: "Motels",
                bookingGuestHouses: "Guest Houses",
                bookingHotels: "Hotels",
                bookingPriceDescription: "Depending on size and quantity. Minimum order of 50 EUR required. Please contact us with details to obtain Your Allergy Free Mattress cleaning quote.",
                footerMainTitle: `Your Way<br class="hide-on-mobile"> to allergy free mattress`,
                footerContactTitle: "contact us",
                footerHoursTitle: "hours",
                footerTextMondayToFriday: "Monday to Friday",
                footerTextWeekends: "Saturday & Sunday",
                footerBookTitle: "Book Your Service",
                footerButton: "Book Now",
                footerSubscriptionTitle: "Subscribe to our newsletter",
                footerSubscriptionDescription: `To always get news about sales <br class="hide-on-mobile"> and any promotions`,
                footerSubmitButton: "submit",
                popupTitle: "Thank You for Your Booking!",
                popupText: `We appreciate your request.<br class="hide-on-mobile"> Our team will contact you within 15 minutes.`,
                popupButton: "got it",
                subscriptionSuccess: "Thank you for subscribing!",
            },
            sk: {
                menuItemHome: "Domov",
                menuItemBlog: "Blog",
                menuItemContact: "Kontakt",
                mainBlockMiniTab: "Čistenie matracov pre domácnosti aubytovacie zariadenia",
                mainBlockTitle: `<span class="blue-text">Smerom</span> <br class="hide-on-mobile">K Matracom Bez Alergií`,
                mainBlockAddition: "Objavte revolučné čistenie matracov, vďaka ktorému bude Váš spánok opäť ozdravujúci a nerušený prejavmi alergie.",
                mainBlockButton: "Rezervovať",
                serviceFirstTitle: `Suché <br class="hide-on-mobile"> čistenie matracov.`,
                serviceFirstDescription: "Naše čistenie matracov využíva špeciálne techniky na odstránenie roztočov, baktérií, plesní a ďalších alergénov. Tento proces výrazne zlepšuje kvalitu vnútorného ovzdušia a pomáha zmierniť prejavy alergie.",
                serviceSecondTitle: `Mokré <br class="hide-on-mobile"> čistenie matracov.`,
                serviceSecondDescription: "Ak je váš matrac silne znečistený a zafarbený (škvrny od domácich zvierat, jedlo, nápoje, telesné tekutiny) alebo máte problémy so zápachom, používame metódu sprejovania a extrakcie s roztokom s nízkou penivosťou. Pri použití tejto metódy je čas schnutia 8 až 12 hodín v závislosti od vetrania a vnútornej teploty.",
                serviceThirdTitle: "Čistenie čalúneného nábytku.",
                serviceThirdDescription: "Naša služba hĺbkového a rýchloschnúceho čistenia textilného čalúnenia zanechá váš nábytok nielen čistejší a žiarivejší, ale aj hygienicky ošetrený. Vďaka dvojitému procesu čistenia odstránime nečistoty, baktérie a alergény, čím prispejeme k zdravšiemu prostrediu vo vašej domácnosti alebo pracovnom priestore.",
                mitesTitle: `Tu sú fakty<br class="hide-on-mobile"> o prachových roztočoch`,
                mitesText: `<ol>
                    <li><span>1. </span>Všadeprítomné roztoče – Bolo opakovane vedecky dokázané, že takmer všetky matrace, čalúnený nábytok a koberce vykazujú vysokú aktivitu roztočov už počas prvých mesiacov používania. Keď sa k tomu pridá časté striedanie ľudí, napríklad v hoteloch, v matracoch ostávajú odumreté kožné bunky a nečistoty rôzneho pôvodu. To môže negatívne ovplyvniť zdravie v krátkom čase</li>
                    <li><span>2. </span>Spíme 1/3 života na matraci – Na matraci spíme v priemere 7 hodín denne, čo predstavuje tretinu života. Kvalitný matrac má priemernú životnosť 10-15 rokov, čo z neho robí najdlhšie používaný kus nábytku v našej domácnosti.</li>
                    <li><span>3. </span>Populácia roztočov – V našich matracoch sa môže nachádzať približne 1,5 milióna roztočov, ktoré sa živia odumretými kožnými bunkami z ľudskej pokožky. Okrem nich sa v matracoch hromadia aj telá uhynutých roztočov, ich výkaly a plesne. Tieto nečistoty sa nachádzajú aj v kobercoch a čalúnenom nábytku.</li>
                    <li><span>4. </span>Výkaly roztočov – Počas svojho života vyprodukujú roztoče veľké množstvo výkalov, ktorých hmotnosť predstavuje približne 200-násobok ich telesnej hmotnosti.</li>
                    <li><span>5. </span>Guanín a alergie – Výkaly roztočov sú mikroskopické guľôčky obalené hlienom. Postupne sa rozpadávajú na jemný prach podobný prachu z prostredia a obsahujú alergén nazývaný guanín. Guanín je známy tým, že u ľudí spôsobuje alergické reakcie a je hlavnou príčinou astmatických záchvatov. Spôsobuje zápal kože a slizníc v nose, ako aj začervenanie očí a kašeľ.</li>
                </ol>`,
                questionsHead: `Často <br class="hide-on-mobile"> kladené otázky <br class="hide-on-mobile"> a odpovede`,
                questionsItemTitleOne: "Aká je odporúčaná frekvencia čistenia môjho matraca?",
                questionsItemTextOne: "Nechať si matrac profesionálne vyčistiť sa odporúča každých 6 mesiacov. Pravidelná údržba pomáha znižovať hromadenie roztočov, baktérií a alergénov, čím prispieva k zdravšiemu spánku a predlžuje životnosť matraca.",
                questionsItemTitleTwo: "Aké metódy sa používajú na suché čistenie matracov?",
                questionsItemTextTwo: "Všetky naše čistenia sú suché, bez chemikálii a šetrne k životnému prostrediu. Sprej na roztoče sa používa len na špeciálnu žiadosť zákazníka.",
                questionsItemTitleThree: "Čo ak mám na matraci škvrny?",
                questionsItemTextThree: "Najprv povrch dôkladne povysávame, aby sme odstránili prach a nečistoty. Následne aplikujeme nízkopenivý čistiaci prostriedok, ktorý účinne preniká do škvŕn. Silný vysávač s funkciou nástreku a odsávania škvrny následne odstráni spolu so zápachom, čím zanechá matrac čistý a svieži.",
                questionsItemTitleFour: "Ako dlho trvá suché čistenie matraca?",
                questionsItemTextFour: "Kompletné suché čistenie štandardného matraca veľkosti King Size trvá približne 20 minút.",
                areasTitle: `Pokrývame všetky<br class="hide-on-mobile"> oblasti vášho bývania`,
                areasItem1: "Matrace",
                areasItem2: "Vankúše",
                areasItem3: "Stoličky",
                areasItem4: "Taburety",
                areasItem5: "Kreslá",
                areasItem6: "Pohovky",
                reviewsTitle: "Čo si o nás myslia zákazníci",
                reviewsMoreButton: "Viac",
                reviewsFirstItemName: "Marek",
                reviewsFirstItemText: "Great service! After MatBlu's cleaning, our mattress looks brand new – no stains, odors, or dust. The process was quick and, most importantly, safe. Very satisfied with the result!",
                reviewsSecondItemName: "Ján",
                reviewsSecondItemText: "Thanks to MatBlu for professional cleaning! All dust, bacteria, and odors are gone, and sleeping has become much more comfortable. The service is worth every penny – highly recommend!",
                reviewsThirdItemName: "Zuzana",
                reviewsThirdItemText: "Cleanliness is a top priority for our hotel. MatBlu quickly and efficiently cleaned the mattresses without excess moisture, which is crucial for guest check-ins. We now work with them on a regular basis!",
                reviewsForthItemName: "Lenka",
                reviewsForthItemText: "As an Airbnb host, I prioritize cleanliness and guest comfort. MatBlu did an excellent job cleaning the mattresses – no stains, no odors, and no long drying time. Now my apartments are always in perfect condition!",
                bookingFormTitle: "Rezervovať",
                bookingNameLabel: "Meno",
                bookingPhoneLabel: "Telefón",
                bookingTextarea: "Uveďte, o aké čistenie mate záujem a množstvo",
                bookingButton: "Rezervovať",
                bookingPriceFrom: "Už od",
                bookingHousehold: "Domácnosti",
                bookingMotels: "Motely",
                bookingGuestHouses: "Penzióny",
                bookingHotels: "Hotely",
                bookingPriceDescription: "Cena závisí od veľkosti a množstva čistených matracov a nábytku. Minimálna objednávka je 50 €. Kontaktujte nás kvôli podrobnostiam a získajte cenovú ponuku na čistenie matracov, ktoré zabezpečí čistejšie prostredie, najmä pre osoby s alergiami.",
                footerMainTitle: `Smerom <br class="hide-on-mobile"> K Matracom Bez Alergií`,
                footerContactTitle: "Kontakt",
                footerHoursTitle: "Otvaracie hodiny",
                footerTextMondayToFriday: "Pondelok - Piatok",
                footerTextWeekends: "Sobota a Nedeľa",
                footerBookTitle: "Rezervovať Čistenie",
                footerButton: "Rezervovať",
                footerSubscriptionTitle: "Prihláste sa na odber newslettera",
                footerSubscriptionDescription: "aby ste vždy dostávali novinky o našich akciách",
                footerSubmitButton: "Poslať",
                popupTitle: "Ďakujeme za Vašu rezerváciu!",
                popupText: `Vážime si vašu požiadavku.<br class="hide-on-mobile"> Náš tím vás bude kontaktovať do 15 minút.`,
                popupButton: "Rozumiem",
                subscriptionSuccess: "Ďakujeme za prihlásenie na odber!",
            },
            ge: {
                menuItemHome: "Startseite",
                menuItemBlog: "Blog",
                menuItemContact: "Kontakt",
                mainBlockMiniTab: "Haushalts und gewerbliche Matratzenreinigung",
                mainBlockTitle: `<span class="blue-text">Ihr Weg</span><br class="hide-on-mobile"> zur allergiefreien Matratze`,
                mainBlockAddition: "Entdecken Sie die revolutionäre Matratzenreinigungsmaschine, die für einen erholsamen und allergiefreien Schlaf sorgt.",
                mainBlockButton: "Reinigung buchen",
                serviceFirstTitle: `Matratzen-<br class="hide-on-mobile">Trockenreinigung.`,
                serviceFirstDescription: "Die Reinigung Ihrer Matratze umfasst spezielle Techniken zur Entfernung von Hausstaubmilben, Bakterien, Schimmel und anderen Allergenen. Dies kann die Luftqualität in Innenräumen spürbar verbessern und Allergiesymptome verringern.",
                serviceSecondTitle: `Matratzen-<br class="hide-on-mobile">Nassreinigung.`,
                serviceSecondDescription: "Bei starken Verschmutzungen oder Geruchsproblemen nutzen wir die Sprüh-Extraktionsmethode mit schaumarmem Reinigungsmittel. Die Trocknung dauert 8–12 Stunden, je nach Luftzirkulation und Raumtemperatur.",
                serviceThirdTitle: "Čistenie čalúneného nábytku.",
                serviceThirdDescription: "Mit unserer Tiefenreinigung und schnelltrocknenden Polsterreinigung wird Ihre Einrichtung sauber, frischer und schnell wieder nutzbar. Unser zweistufiges Verfahren sorgt nicht nur für Sauberkeit, sondern auch für Hygiene – für ein gesünderes Wohn- oder Arbeitsumfeld.",
                mitesTitle: `Einige Fakten <br class="hide-on-mobile"> über Hausstaubmilben`,
                mitesText: `<ol>
                    <li><span>1. </span>Wir verbringen durchschnittlich 7 Stunden pro Tag auf unserer Matratze – das sind etwa ein Drittel unseres Lebens. Eine hochwertige Matratze hält im Durchschnitt 10 bis 15 Jahre und ist damit das am längsten genutzte Möbelstück in unserem Zuhause.</li>
                    <li><span>2. </span>In einer Matratze befinden sich rund 1,5 Millionen Milben, dazu kommen abgestorbene Milben, deren Kot, Hautschuppen und Schimmel. Diese Elemente finden sich auch in Teppichen und Polstermöbeln.</li>
                    <li><span>3. </span>Während ihres Lebens produziert eine Milbe etwa das 200-fache ihres Körpergewichts an Kot.</li>
                    <li><span>4. </span>Der Milbenkot besteht aus kleinen, schleimüberzogenen Partikeln, die sich in feinen Staub verwandeln. Dieser enthält das Allergen Guanin.</li>
                    <li><span>5. </span>Guanin ist bekannt dafür, allergische Reaktionen auszulösen und ist eine Hauptursache für Asthmaanfälle. Es führt zu Entzündungen der Haut und der Schleimhäute in der Nase sowie zu Augenrötungen und Husten.</li>
                </ol>`,
                questionsHead: `Häufig <br class="hide-on-mobile"> gestellte Fragen <br class="hide-on-mobile"> und Antworten`,
                questionsItemTitleOne: "Wie oft sollte ich meine Matratze reinigen lassen?",
                questionsItemTextOne: "Es wird empfohlen, die Matratze alle sechs Monate professionell reinigen zu lassen. Regelmäßige Reinigungen reduzieren die Ansammlung von Hausstaubmilben und verlängern die Lebensdauer der Matratze.",
                questionsItemTitleTwo: "Welche Methoden werden zur Matratzenreinigung verwendet?",
                questionsItemTextTwo: "Alle unsere Behandlungen sind trocken, chemiefrei und umweltfreundlich. Das Milbenspray wird nur auf speziellen Kundenwunsch verwendet.",
                questionsItemTitleThree: "Was zu tun, wenn meine Matratze Flecken hat?",
                questionsItemTextThree: "Vor der Behandlung muss die Oberfläche zunächst abgesaugt werden. Anschließend wird ein schaumarmes Reinigungsmittel aufgesprüht. Mithilfe eines leistungsstarken Sprüh- und Saugvakuums werden Flecken aus der Matratze entfernt. Während dieses Prozesses werden auch unangenehme Gerüche beseitinated.",
                questionsItemTitleFour: "Ako dlho trvá suché čistenie matraca?",
                questionsItemTextFour: "Wie Lange wird  die Trockenreinigung einer Matratze dauern?",
                areasTitle: `Wir pflegen um alle bereiche<br class="hide-on-mobile"> Ihres Wohnraums`,
                areasItem1: "Matratzen",
                areasItem2: "Kissen",
                areasItem3: "Stühle",
                areasItem4: "Hocker",
                areasItem5: "Sessel",
                areasItem6: "Sofas",
                reviewsTitle: "Was unsere Kunden über uns sagen",
                reviewsMoreButton: "Mehr",
                reviewsFirstItemName: "Johann",
                reviewsFirstItemText: "Toller Service! Nach der Reinigung durch MatBlu sieht unsere Matratze aus wie neu – keine Flecken, keine Gerüche, kein Staub. Der Prozess war schnell und vor allem sicher. Sehr zufrieden mit dem Ergebnis!",
                reviewsSecondItemName: "Lukas",
                reviewsSecondItemText: "Danke an MatBlu für die professionelle Reinigung! Alle Staubpartikel, Bakterien und Gerüche sind verschwunden, und der Schlafkomfort hat sich enorm verbessert. Der Service ist jeden Cent wert – absolute Empfehlung!",
                reviewsThirdItemName: "Franziska",
                reviewsThirdItemText: "Sauberkeit hat in unserem Hotel oberste Priorität. MatBlu hat die Matratzen schnell und effizient gereinigt, ohne übermäßige Feuchtigkeit – ein entscheidender Faktor für den schnellen Gästewechsel. Wir arbeiten jetzt regelmäßig mit ihnen zusammen!",
                reviewsForthItemName: "Katrin",
                reviewsForthItemText: "Als Airbnb-Host lege ich großen Wert auf Sauberkeit und Gästekomfort. MatBlu hat hervorragende Arbeit geleistet – keine Flecken, keine Gerüche und keine langen Trocknungszeiten. Dank ihnen sind meine Apartments immer in perfektem Zustand!",
                bookingFormTitle: "Bitte Ihre Reinigung buchen",
                bookingNameLabel: "Name",
                bookingPhoneLabel: "Telefon",
                bookingTextarea: "Bitte Mitteilen, welche Reinigung Sie wünschen und in welcher Menge",
                bookingButton: "Reinigung buchen",
                bookingPriceFrom: "ab",
                bookingHousehold: "Privathaushalte",
                bookingMotels: "Motels",
                bookingGuestHouses: "Gästehäuser",
                bookingHotels: "Hotels",
                bookingPriceDescription: "Der Preis ist von der Größe and Menge abhaengig. Der Mindestbestellwert ist 50€. Bitte kontaktieren Sie uns, um ein individuelles allergiefreien Matratzreinigung Angebot zu erhalten.",
                footerMainTitle: `Ihr Weg<br class="hide-on-mobile"> zur allergiefreien Matratze`,
                footerContactTitle: "Kontaktieren Sie uns",
                footerHoursTitle: "Öffnungszeiten",
                footerTextMondayToFriday: "Montag bis Freitag",
                footerTextWeekends: "Samstag & Sonntag",
                footerBookTitle: "Reinigung buchen",
                footerButton: "Reinigung buchen",
                footerSubscriptionTitle: "Unseren Newsletter abonnieren",
                footerSubscriptionDescription: "Um staendig Neuigkeiten zu Angeboten und Aktionen zu erhalten",
                footerSubmitButton: "Anmelden",
                popupTitle: "Vielen Dank für Ihre Buchung!",
                popupText: `Wir danken Ihnen für Ihre Anfrage.<br class="hide-on-mobile"> Unser Team wird Sie innerhalb von 15 Minuten kontaktieren.`,
                popupButton: "Verstanden",
                subscriptionSuccess: "Vielen Dank für Ihr Abonnement!",
            }
        };

        const validationTranslations = {
            en: {
                required: 'This field is required',
                email: 'Please enter a valid email',
                phone: 'Please enter a valid phone number'
            },
            sk: {
                required: 'Toto pole je povinné',
                email: 'Zadajte platný e-mail',
                phone: 'Zadajte platné telefónne číslo'
            },
            ge: {
                required: 'Dieses Feld ist erforderlich',
                email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                phone: 'Bitte geben Sie eine gültige Telefonnummer ein'
            }
        };

        function smoothScroll(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        document.querySelectorAll('.menu__item').forEach(item => {
            item.addEventListener('click', smoothScroll);
        });

        document.querySelectorAll('a[href="#order"]').forEach(button => {
            button.addEventListener('click', smoothScroll);
        });

        document.querySelectorAll('a[href="#home"]').forEach(item => {
            item.addEventListener('click', smoothScroll);
        });

        function getCurrentLanguage() {
            return document.documentElement.lang || 'en';
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        function validatePhone(phone) {
            const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;
            return re.test(phone);
        }

        function showError(input, message) {
            const formBlock = input.closest('.form__block') || input.closest('.info__action');
            const formBlockLabel = formBlock.querySelector(`label[for="${input.id}"]`);
            let error = formBlock.querySelector('.error-message');

            if (!error) {
                error = document.createElement('div');
                error.className = 'error-message';
                formBlock.appendChild(error);
            }

            const labelText = formBlockLabel ? formBlockLabel.textContent.trim() : '';
            const colon = labelText.endsWith(':') ? '' : ':';
            error.textContent = `${labelText}${colon} ${message}`;

            input.classList.add('error');
            input.style.marginTop = '10px';
            input.style.marginBottom = '5px';
            formBlockLabel.style.display = 'none';
            if (input === emailSubscriptionInput) {
                submitButton.style.top = '20px';
            }

            if (formBlockLabel) {
                updateLabelColor(input, formBlockLabel);
                const handleInputClick = () => updateLabelColor(input, formBlockLabel);
                input.addEventListener('click', handleInputClick);
            }
        }

        function updateLabelColor(input, label) {
            label.style.color = input.classList.contains('error') ? '#DE3333' : '#4474E4';
        }

        function removeError(input) {
            const formBlock = input.closest('.form__block') || input.closest('.info__action');
            const error = formBlock.querySelector('.error-message');
            const formBlockLabel = formBlock.querySelector(`label[for="${input.id}"]`);
            if (error) {
                error.remove();
            }

            input.classList.remove('error');
            input.style.marginTop = '';
            input.style.marginBottom = '';
            submitButton.style.top = '';
            if (formBlockLabel) {
                formBlockLabel.style.color = input.classList.contains('error') ? '#DE3333' : '#4474E4';
            }
        }

        function validateField(input) {
            const value = input.value.trim();
            const lang = getCurrentLanguage();
            const translations = validationTranslations[lang] || validationTranslations['en'];

            removeError(input);

            if (input.required && !value) {
                showError(input, translations.required);
                return false;
            }


            if (input.type === 'email' && value && !validateEmail(value)) {
                showError(input, translations.email);
                return false;
            }


            if (input.id.includes('phone') && value && !validatePhone(value)) {
                showError(input, translations.phone);
                return false;
            }

            removeError(input);
            return true;
        }

        function isFormValid() {
            const nameValid = document.getElementById('booking__name-input').value.trim() !== '';
            const emailValid = validateEmail(document.getElementById('booking__email-input').value.trim());
            const phoneValid = validatePhone(document.getElementById('booking__phone-input').value.trim());
            return nameValid && emailValid && phoneValid;
        }

        let isSubmitting = false;
        function initFormsValidation() {

            const bookingForm = document.querySelector('.booking__form form');
            const bookingBtn = document.getElementById('book-cleaning');
            if (bookingForm) {
                const bookingInputs = bookingForm.querySelectorAll('input');

                bookingForm.querySelector('#booking__name-input').required = true;
                bookingForm.querySelector('#booking__phone-input').required = true;
                bookingForm.querySelector('#booking__email-input').required = true;


                bookingInputs.forEach(input => {

                    input.addEventListener('blur', function () {
                        validateField(input);
                    });

                    input.addEventListener('input', function () {
                        if (input.classList.contains('error')) {
                            validateField(input);
                        }
                        bookingBtn.disabled = !isFormValid();
                    });
                });

                if (isSubmitting) return;
                isSubmitting = true;
                bookingForm.addEventListener('submit', async function (e) {
                    e.preventDefault();
                    bookingBtn.disabled = true;

                    let isValid = true;
                    bookingInputs.forEach(input => {
                        if (!validateField(input)) {
                            isValid = false;
                        }
                    });

                    if (isValid) {
                        const formData = new FormData(bookingForm);
                        loaderOverlay.style.display = 'flex';
                        loaderOverlay.style.opacity = '1';
                        loaderOverlay.style.visibility = 'visible';
                        try {
                            const response = await fetch(bookingForm.action, {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'Accept': 'application/json'
                                }
                            });

                            if (response.ok) {
                                popup.style.display = 'flex';
                                bookingForm.reset();
                            } else {
                                throw new Error('Form submission failed');
                            }
                        } catch (error) {
                            alert('Error: Please try again later.');
                        } finally {
                            loaderOverlay.style.opacity = '0';
                            loaderOverlay.style.visibility = 'hidden';

                            setTimeout(() => {
                                loaderOverlay.style.display = 'none';
                            }, 300);

                            isSubmitting = false;
                            bookingBtn.disabled = false;
                        }

                    }
                });
            }


            const subscriptionForm = document.getElementById('subscription-form');
            if (subscriptionForm) {
                const subscriptionInput = subscriptionForm.querySelector('input[type="email"]');
                const submitButton = subscriptionForm.querySelector('.action__submit');


                subscriptionInput.required = true;

                subscriptionInput.addEventListener('blur', function () {
                    validateField(subscriptionInput);
                });

                subscriptionInput.addEventListener('input', function () {
                    if (subscriptionInput.classList.contains('error')) {
                        validateField(subscriptionInput);
                    }
                });


                subscriptionForm.addEventListener('submit', async function (e) {
                    e.preventDefault();

                    if (validateField(subscriptionInput)) {
                        const formData = new FormData(subscriptionForm);
                        const successMessage = subscriptionForm.querySelector('.subscription-success-message');
                        const currentLang = getCurrentLanguage();

                        loaderOverlay.style.display = 'flex';
                        loaderOverlay.style.opacity = '1';
                        loaderOverlay.style.visibility = 'visible';

                        try {
                            const response = await fetch(subscriptionForm.action, {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'Accept': 'application/json'
                                }
                            });

                            if (response.ok) {
                                subscriptionForm.reset();

                                successMessage.textContent = translations[currentLang].subscriptionSuccess;
                                successMessage.style.display = 'block';

                                const label = subscriptionForm.querySelector('.label');
                                if (label) {
                                    label.style.top = '12px';
                                    label.style.color = '#A9ABB0';
                                }

                                setTimeout(() => {
                                    successMessage.style.display = 'none';
                                }, 8000);
                            } else {
                                throw new Error('Form submission failed');
                            }
                        } catch (error) {
                            console.error('Error:', error);
                            successMessage.textContent = 'Error occurred, please try again';
                            successMessage.style.display = 'block';
                            successMessage.style.color = '#DE3333';
                        } finally {
                            loaderOverlay.style.opacity = '0';
                            loaderOverlay.style.visibility = 'hidden';

                            setTimeout(() => {
                                loaderOverlay.style.display = 'none';
                            }, 300);

                        }
                    }
                });

            }
        }

        if (burgerMenu && modalOverlay) {
            burgerMenu.addEventListener('click', function (e) {
                e.stopPropagation();
                modalOverlay.style.display = 'block';
                modalOverlay.classList.add('show');
                document.body.style.overflow = 'hidden';
            });

            if (burgerMenuClose) {
                burgerMenuClose.addEventListener('click', function (e) {
                    e.stopPropagation();
                    modalOverlay.style.display = 'none';
                    modalOverlay.classList.remove('show');
                    document.body.style.overflow = '';
                });
            }


            modalItems.forEach(item => {
                item.addEventListener('click', function () {
                    modalOverlay.style.display = 'none';
                    modalOverlay.classList.remove('show');
                    document.body.style.overflow = '';
                });
            });


            modalOverlay.addEventListener('click', function (e) {
                if (e.target === modalOverlay) {
                    modalOverlay.style.display = 'none';
                    modalOverlay.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });
        }

        if (head && body) {
            head.addEventListener('click', function (e) {
                e.stopPropagation();
                body.style.display = body.style.display === 'flex' ? 'none' : 'flex';
            });
        }

        if (modalHead && modalBody) {
            modalHead.addEventListener('click', function (e) {
                e.stopPropagation();
                modalBody.style.display = 'flex';
            });
        }

        function setupLanguageClickHandler(element) {
            element.addEventListener('click', function () {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);

                if (body) body.style.display = 'none';
                if (modalBody) modalBody.style.display = 'none';
            });
        }

        if (languages) {
            languages.forEach(setupLanguageClickHandler);
        }
        if (modalLanguages) {
            modalLanguages.forEach(setupLanguageClickHandler);
        }

        document.addEventListener('click', function () {
            if (body) body.style.display = 'none';
            if (modalBody) modalBody.style.display = 'none';
        });

        function changeLanguage(lang) {
            document.documentElement.classList.remove('lang-en', 'lang-sk', 'lang-ge');
            document.documentElement.classList.add(`lang-${lang}`);
            document.documentElement.lang = lang;

            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });


            const textarea = document.getElementById('booking__textarea');

            if (textarea && translations[lang] && translations[lang]['bookingTextarea']) {
                textarea.setAttribute('placeholder', translations[lang]['bookingTextarea']);
            }

            function autoResizeTextarea(textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            }

            textarea.addEventListener('input', () => {
                autoResizeTextarea(textarea);
            });

            autoResizeTextarea(textarea);

            const heads = document.querySelectorAll('.languages-switcher__head');
            const selectedLang = document.querySelector(`.languages-switcher__language[data-lang="${lang}"]`);

            if (selectedLang) {
                heads.forEach(head => {
                    head.innerHTML = selectedLang.innerHTML;
                    head.setAttribute('data-lang', lang);
                });
            }

            const mitesContent = document.querySelector('.mites__content');
            const mitesContentImage = document.querySelector('.mites__content-image');
            const mitesContentText = document.querySelector('.mites__content-text');

            mitesContentImage.style.top = '';
            mitesContentText.style.bottom = '';
            mitesContent.style.minHeight = `591px`;

            mitesContentImage.classList.remove('lang-en', 'lang-ge', 'lang-sk');
            mitesContentImage.classList.add(`lang-${lang}`);
            if (lang === 'sk') {
                mitesContent.style.minHeight = `${mitesContentText.offsetHeight}px`;
                const halfMitesContentText = mitesContentText.offsetHeight / 2;
                const difference = mitesContent.offsetHeight - mitesContentText.offsetHeight;

                mitesContentImage.style.top = `${halfMitesContentText - 288}px`;
                mitesContentText.style.bottom = `${difference}px`;
            }

            const swiperTexts = document.querySelectorAll('.reviews__item-text');
            const maxHeight = 159;
            swiperTexts.forEach(swiperText => {
                const truncateText = (element, maxHeight) => {
                    let text = element.textContent;
                    while (element.scrollHeight > maxHeight && text.length > 0) {
                        text = text.slice(0, -1);
                        element.textContent = text + '...';
                    }
                };

                if (swiperText.scrollHeight > maxHeight) {
                    truncateText(swiperText, maxHeight);
                }
            })
            handleServicesBlocks();


            const errors = document.querySelectorAll('.error-message');
            const currentTranslations = validationTranslations[lang] || validationTranslations['en'];

            errors.forEach(error => {
                const input = error.closest('.form__block, .info__action').querySelector('input');
                const label = error.closest('.form__block, .info__action').querySelector('label');

                if (input) {
                    const value = input.value.trim();

                    if (input.required && !value) {
                        error.textContent = currentTranslations.required;
                    } else if (input.type === 'email' && value && !validateEmail(value)) {
                        error.textContent = currentTranslations.email;
                    } else if (input.id.includes('phone') && value && !validatePhone(value)) {
                        error.textContent = currentTranslations.phone;
                    }


                    if (label) {
                        const colon = label.textContent.trim().endsWith(':') ? '' : ':';
                        error.textContent = `${label.textContent.trim()}${colon} ${error.textContent}`;
                    }
                }
            });
            initFormsValidation();
        }

        function handleServicesBlocks() {
            const blocks = document.querySelectorAll('.services__block');


            blocks.forEach(block => {
                block.removeEventListener('mouseenter', handleMouseEnter);
                block.removeEventListener('mouseleave', handleMouseLeave);
            });


            if (window.innerWidth > 810) {
                blocks.forEach(block => {
                    const content = block.querySelector('.block__content');
                    const title = block.querySelector('.services__title');
                    const description = block.querySelector('.services__description');
                    const titleHeight = title.offsetHeight;
                    const padding = 40;


                    block.dataset.titleHeight = titleHeight;
                    block.dataset.padding = padding;

                    content.style.maxHeight = `${titleHeight + padding}px`;
                    description.style.opacity = '0';


                    block.addEventListener('mouseenter', handleMouseEnter);
                    block.addEventListener('mouseleave', handleMouseLeave);
                });
            } else {

                blocks.forEach(block => {
                    const content = block.querySelector('.block__content');
                    const description = block.querySelector('.services__description');

                    content.style.maxHeight = '';
                    description.style.opacity = '';
                    block.classList.remove('hovered');
                });
            }
        }
        function handleMouseEnter() {
            const content = this.querySelector('.block__content');
            const description = this.querySelector('.services__description');

            this.classList.add('hovered');
            content.style.maxHeight = `${this.offsetHeight}px`;
            description.style.opacity = '1';
        }

        function handleMouseLeave() {
            const content = this.querySelector('.block__content');
            const description = this.querySelector('.services__description');
            const titleHeight = parseFloat(this.dataset.titleHeight) || 0;
            const padding = parseFloat(this.dataset.padding) || 0;

            this.classList.remove('hovered');
            content.style.maxHeight = `${titleHeight + padding}px`;
            description.style.opacity = '0';
        }

        head.addEventListener('click', function (e) {
            e.stopPropagation();
            body.style.display = 'flex';
        })

        languages.forEach(language => {
            language.addEventListener('click', function () {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                body.style.display = 'none';
            })
        });

        document.addEventListener('click', function () {
            body.style.display = 'none';
        });

        changeLanguage('en');

        const swiper = new Swiper('.reviews__items', {
            direction: "horizontal",
            loop: true,
            grabCursor: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            speed: 500,
        });


        if (accordion.length > 0) {
            accordion.forEach(item => {
                const header = item.querySelector('.item__header');
                const content = item.querySelector('.item__content');

                if (header && content) {
                    item.addEventListener('click', function () {
                        const isOpen = item.classList.contains('open');

                        accordion.forEach(otherItem => {
                            if (otherItem !== item && otherItem.classList.contains('open')) {
                                otherItem.classList.remove('open');
                            }
                        });
                        if (!isOpen) {
                            item.classList.add('open');
                        }
                    });
                }
            });
        }

        inputs.forEach((input, index) => {
            const label = labels[index];
            const formBlock = input.closest('.form__block') || input.closest('.info__action');

            if (input.parentElement.parentElement.id === 'subscription__info') {
                const updatePadding = () => {
                    const buttonWidth = submitButton.offsetWidth;
                    input.style.paddingRight = `${buttonWidth + 30}px`;
                };

                updatePadding();

                new MutationObserver(updatePadding).observe(submitButton, {
                    childList: true,
                    subtree: true,
                });
            }

            input.addEventListener('input', () => {
                if (input.value) {
                    label.style.top = '-20px';
                    label.style.marginTop = '6px';
                    if (input === emailSubscriptionInput) {
                        emailSubscriptionLabel.style.top = '-25px';
                        submitButton.style.top = '10px';
                    }

                    label.style.color = '#4474E4';
                    if (window.innerWidth < 575) {
                        label.style.marginTop = '4px';
                        label.style.top = '-15px';
                        if (input === emailSubscriptionInput) {
                            emailSubscriptionLabel.style.top = '-22px';
                        }
                    }
                } else {
                    formBlock.style.marginTop = ''
                    label.style.top = '12px';
                    label.style.color = '#A9ABB0';
                }
            });

            input.addEventListener('mouseenter', () => {
                label.style.color = '#4474E4';
            });

            input.addEventListener('click', () => {
                label.style.top = '-20px';
                label.style.marginTop = '6px';
                label.style.color = '#4474E4';
                if (input === emailSubscriptionInput) {
                    emailSubscriptionLabel.style.top = '-25px';
                    submitButton.style.top = '10px';
                }
                if (window.innerWidth < 575) {
                    label.style.top = '-15px';
                    label.style.marginTop = '4px';
                    if (input === emailSubscriptionInput) {
                        emailSubscriptionLabel.style.top = '-22px';
                    }
                }
            });

            input.addEventListener('mouseleave', () => {
                if (document.activeElement !== input && !input.value) {
                    label.style.color = '';
                }
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.style.color = '';
                    label.style.top = '12px';
                }
            });
        })

        if (submitButton && emailSubscriptionInput && emailSubscriptionLabel) {
            submitButton.addEventListener('mouseenter', () => {
                emailSubscriptionInput.classList.add('highlight-border');
                emailSubscriptionLabel.style.color = '#4474E4';
            });

            submitButton.addEventListener('mouseleave', () => {
                emailSubscriptionInput.classList.remove('highlight-border');
                if (document.activeElement !== emailSubscriptionInput && !emailSubscriptionInput.value) {
                    emailSubscriptionLabel.style.color = '';
                }
            });
        }

        function rearrangeElements() {
            const container = document.querySelector('.main .container');
            const mainText = document.querySelector('.main__text');
            const mainImage = document.querySelector('.main__image');
            const textTitle = document.querySelector('.text__title');

            if (!container || !mainText || !mainImage || !textTitle) return;

            if (window.innerWidth <= 870) {

                if (mainImage.parentElement === mainText) return;

                textTitle.insertAdjacentElement('afterend', mainImage);
            } else {

                if (mainImage.parentElement === container) return;
                container.appendChild(mainImage);
            }
        }

        closePopup.addEventListener('click', () => {
            return popup.style.display = 'none'
        })

        function debounce(func, timeout = 100) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        }

        window.addEventListener('load', () => {
            setTimeout(() => {
                loaderOverlay.style.opacity = '0';
                loaderOverlay.style.visibility = 'hidden';


                setTimeout(() => {
                    loaderOverlay.style.display = 'none';
                }, 300);
            }, 500);
            rearrangeElements();
            initServiceSwiper();
            handleServicesBlocks();
            initFormsValidation();
        });

        window.addEventListener('resize', debounce(() => {
            rearrangeElements();
            initServiceSwiper();
            handleServicesBlocks();
        }));

        window.addEventListener('error', () => {
            loaderOverlay.style.display = 'none';
        });
    }
)
