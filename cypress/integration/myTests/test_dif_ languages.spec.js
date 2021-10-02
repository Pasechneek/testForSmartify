const langCode = [
    'sp', 'pr', 'ge', 'du', 'tu', 'fr', 'po', 'jp', 'ko', 'it' 
];

const disclaimer = [
    'Descargo de responsabilidad', 
    'Isenção de Responsabilidade', 
    'Haftungsausschluss', 
    'Disclaimer', 
    'Feragat Etmek', 
    'Avertissement', 
    'zrezygnuj',
    //zrezygnuj
    '免責事項', 
    '면책', 
    'Smentita'
];

const privacyPolicy = [
    'Política de Privacidad', 
    'Política de Privacidade', 
    'Datenschutzbestimmungen', 
    'Privacybeleid', 
    'Gizlilik Politikası', 
    'Politique de Confidentialité', 
    'Polityka prywatności', 
    'プライバシーポリシー', 
    '개인정보처리방침', 
    'Informativa sulla Privacy'
];

const adverteiseWithUs = [
    'Anúnciate con nosotros', 
    'Anuncie Conosco', 
    'Werben sie mit uns', 
    'Adverteer bij ons', 
    'Bizimle Tanıtın', 
    'Faites votre Pub', 
    'Reklamuj u nas', 
    '広告掲載について', 
    '광고 제휴 문의', 
    'Pubblicizzare con noi'
];

const impressum = [
    'Publicación', 'Impressum', 'Impressum', 'Impressum', 'Yasal Uyarı', 'Impressum', 'Impressum', '印象', '발행', 'Imprimere'
];

const theLink = [
    'https://playsstar.com/worldwide/actsp-ob-sp',
    'https://playsstar.com/worldwide/agedif-ob-pr',
    'https://playsstar.com/worldwide/aisad-ob-ge',
    'https://playsstar.com/worldwide/airfor-ob-du',
    'https://playsstar.com/worldwide/baboom-ob-tu',
    'https://playsstar.com/worldwide/bagoff-ob-fr',
    'https://playsstar.com/worldwide/baboom-ob-po',
    'https://playsstar.com/worldwide/aisad-ob-jp',
    'https://playsstar.com/worldwide/babies-ob-ko',
    'https://playsstar.com/worldwide/altar-ob-it',
];

//const linkGenerator = (langCode) => 'https://playsstar.com/worldwide/aisad-ob-' + langCode;

//console.log(linkGenerator('ge'));

const engine = (theLink, disclaimer, privacyPolicy, adverteiseWithUs, impressum) => {

    describe(`Testing version on ${theLink}`, () => {
        it('website visit', () => {
            cy.visit(theLink);
        });
        
        it('Disclaymer check', () => {
            cy.get('#menu-item-1819 > a').should('contain', disclaimer);
        });
    
        it('privacy test', () => {
            cy.get('#menu-item-1818 > a').should('contain', privacyPolicy);
        });
    
        it('Advertise With Us test', () => {
            cy.get('#menu-item-1820 > a').should('contain', adverteiseWithUs);
        });
    
        it('Impressum test', () => {
        cy.get('#menu-item-9785 > a').should('contain', impressum);
        });
    });


    let engineResult;
    engineResult = 'done';
    //engineResult = `link ${theLink}\n disclaimer is ${disclaimer}\n privacyPolicy is ${privacyPolicy}\n adverteiseWithUs is ${adverteiseWithUs}\n impressum is ${impressum}\n`;
    return engineResult;
};




const headersTest = (langCode, disclaimer, privacyPolicy, adverteiseWithUs, impressum) => {
    let counter = 0;
    while (counter < (langCode.length)) {
        let currentCode = langCode[counter];
        console.log('the counter is ' + counter);
        

        //let theLink = linkGenerator(langCode[counter]);
        //console.log('and link is ' + theLink);

        let result;
        result = engine(theLink[counter], disclaimer[counter], privacyPolicy[counter], adverteiseWithUs[counter], impressum[counter]);
        console.log(result);

        counter += 1;
    }
    return counter;
};

headersTest(langCode, disclaimer, privacyPolicy, adverteiseWithUs, impressum);




/*
        it('Health test', () => {
        cy.get('#menu-item-1248 > a').should('contain', 'Health');
        });
    
        it('Fitness test', () => {
        cy.get('#menu-item-1246 > a').should('contain', 'Fitness');
        });
    
        it('Sports test', () => {
            cy.get('#menu-item-6313 > a').should('contain', 'Sports');
        });
*/




// special test     'https://playsstar.com/404-example-it' // 11