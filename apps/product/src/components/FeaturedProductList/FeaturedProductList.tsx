import React from 'react';
import { ProductCard } from '@design-system/components/molecules'; // Import your ProductCard component

// Sample dataset with one product for demonstration, add more to extend
const sampleData = [
    {
        id: 'ecc87b92-c914-4236-ae2b-44e94d651752',
        sku: '344646-001',
        brand: 'Nike',
        name: 'Nike Air 1/2 Cent Black',
        colorway: 'Black/Black-Metallic Silver',
        gender: 'men',
        silhouette: '1/2 Cent',
        releaseYear: '2009',
        releaseDate: '2009-07-24',
        retailPrice: 190,
        estimatedMarketValue: 190,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/000/032/117/original/344646_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/000/032/117/original/344646_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/000/032/117/original/344646_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-1-2-cent-black',
            goat: 'https://goat.com/sneakers/1-2-cent-344646-001',
            flightClub: 'https://flightclub.com/1-2-cent-344646-001',
            stadiumGoods: ''
        }
    },
    {
        id: 'df72e175-4337-4600-968c-2f0a77fe1ad6',
        sku: '344646-002',
        brand: 'Nike',
        name: 'Nike Air 1/2 Cent Black Green Spark',
        colorway: 'Black/Black-Green Spark-Metallic Silver',
        gender: 'men',
        silhouette: '1/2 Cent',
        releaseYear: '2009',
        releaseDate: '2009-12-01',
        retailPrice: 190,
        estimatedMarketValue: 150,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/000/032/118/original/344646_002.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/000/032/118/original/344646_002.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/000/032/118/original/344646_002.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-1-2-cent-eggplant',
            goat: 'https://goat.com/sneakers/1-2-cent-344646-002',
            flightClub: 'https://flightclub.com/1-2-cent-344646-002',
            stadiumGoods: ''
        }
    },
    {
        id: '3a4ce10b-b949-4d23-be4a-868e91708d7c',
        sku: '344646-003',
        brand: 'Nike',
        name: 'Nike Air 1/2 Cent Silver',
        colorway: 'Black/Metallic Silver',
        gender: 'men',
        silhouette: '1/2 Cent',
        releaseYear: '2009',
        releaseDate: '2009-09-25',
        retailPrice: 190,
        estimatedMarketValue: 359,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/100/579/287/original/21956_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/100/579/287/original/21956_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/100/579/287/original/21956_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-1-2-cent-silver',
            goat: 'https://goat.com/sneakers/1-2-cent-344646-003',
            flightClub: 'https://flightclub.com/1-2-cent-344646-003',
            stadiumGoods: 'https://sale.stadiumgoods.com/nike-1-2-cent-344646-003'
        },
        color: 'black'
    },
    {
        id: 'e3928eb5-c4c2-4afb-b3ff-a6ca40345254',
        sku: '344646-401',
        brand: 'Nike',
        name: 'Nike Air 1/2 Cent Royal',
        colorway: 'Varsity Royal/Black-Metallic Silver',
        gender: 'men',
        silhouette: '1/2 Cent',
        releaseYear: '2009',
        releaseDate: '2009-02-13',
        retailPrice: 190,
        estimatedMarketValue: 445,
        story: 'Combining a mashup of NBA star Penny Hardaway’s signature sneakers and the Air Foamposite, the Nike Air 1/2 Cent pays tribute to the basketball legend. The upper flaunts a sculpted design inspired by the Foamposite original. It&#39;s outfitted with a marbled Swoosh and branding from Hardaway’s Lil’ Penny marketing campaign, including the Lil’ Penny logo and his ‘1/2 Cent’ jersey number. The visible Air unit completes the 90s-inspired design.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/098/477/735/original/21878_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/098/477/735/original/21878_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/098/477/735/original/21878_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-1-2-cent-royal',
            goat: 'https://goat.com/sneakers/1-2-cent-344646-401',
            flightClub: 'https://flightclub.com/1-2-cent-344646-401',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'b735b18e-0edd-4a1b-be4b-700b847f6db1',
        sku: '344646-600',
        brand: 'Nike',
        name: 'Nike Air 1/2 Cent Cranberry',
        colorway: 'Varsity Red/Black-Varsity Red',
        gender: 'men',
        silhouette: '1/2 Cent',
        releaseYear: '2010',
        releaseDate: '2010-12-18',
        retailPrice: 190,
        estimatedMarketValue: 400,
        story: 'The Nike 1/2 Cent &#39;Cranberry&#39; updates the hybrid hoops lifestyle sneaker from 2009 in a festive red colorway that hit the streets in December of the following year, just in time for the holiday season. This mash-up model celebrates the hardwood legacy of Anfernee &#39;Penny&#39; Hardaway, NBA star and muse for the &#39;Lil Penny&#39; ad campaign. It incorporates design elements from his five signature shoes, including the original Air Foamposite and Air Penny versions 1 through 4.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/000/032/122/original/344646_600.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/000/032/122/original/344646_600.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/000/032/122/original/344646_600.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-1-2-cent-crankberry',
            goat: 'https://goat.com/sneakers/1-2-cent-cranberry-344646-600',
            flightClub: 'https://flightclub.com/1-2-cent-cranberry-344646-600',
            stadiumGoods: ''
        }
    },
    {
        id: '51985864-ada8-4abb-89c5-ae00449aafa4',
        brand: 'Nike',
        colorway: 'Black/Black/Black',
        estimatedMarketValue: 115,
        gender: 'men',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/096/779/934/original/1328101_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/096/779/934/original/1328101_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/096/779/934/original/1328101_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-sp-1017-alyx-9sm-black',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-low-sp-triple-black-fj4908-001',
            flightClub:
                'https://flightclub.com/1017-alyx-9sm-x-air-force-1-low-sp-triple-black-fj4908-001',
            stadiumGoods: ''
        },
        name: 'Nike Air Force 1 Low SP 1017 ALYX 9SM Black',
        releaseDate: '2023-12-15',
        releaseYear: '2023',
        retailPrice: 155,
        silhouette: 'Air Force 1',
        sku: 'FJ4908-001',
        story: 'The 1017 ALYX 9SM x Nike Air Force 1 Low SP ‘Triple Black’ brings Matthew M. Williams’ modern and minimalist design ethos to the iconic retro hoops shoe. Built with blacked-out tumbled leather, the upper features ALYX lace dubrae and a metal lightercap on one of the lateral eyelets. ‘1017 ALYX 9SM’ is printed in silver lettering on the lateral heel. A matching black finish is applied to the durable cupsole, fitted with encapsulated Air-sole cushioning and supported by a pivot-point rubber outsole.',
        color: 'black'
    },
    {
        id: '374a9590-14ea-4f32-b8b1-3cd655d83648',
        brand: 'Nike',
        colorway: 'White/White/White',
        estimatedMarketValue: 112,
        gender: 'men',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/096/910/209/original/1328103_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/096/910/209/original/1328103_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/096/910/209/original/1328103_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-sp-1017-alyx-9sm-white',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-low-sp-triple-white-fj4908-100',
            flightClub:
                'https://flightclub.com/1017-alyx-9sm-x-air-force-1-low-sp-triple-white-fj4908-100',
            stadiumGoods: ''
        },
        name: 'Nike Air Force 1 Low SP 1017 ALYX 9SM White',
        releaseDate: '2023-12-15',
        releaseYear: '2023',
        retailPrice: 155,
        silhouette: 'Air Force 1',
        sku: 'FJ4908-100',
        story: 'The 1017 ALYX 9SM x Nike Air Force 1 Low SP ‘Triple White’ presents Matthew M. Williams’ minimalist take on the sneaker icon. Crafted from tumbled white leather, the upper features tonal Swoosh branding and a metal lightercap on one of the lateral eyelets. Unique flourishes include ALYX lace jewels and ‘1017 ALYX 9SM’ stamped in silver lettering on the lateral heel. The sneaker is mounted on a matching white midsole with encapsulated Air-sole cushioning in the heel.',
        color: 'white'
    },
    {
        id: 'b4b6b152-f421-4600-80a1-8a68f92c4c46',
        sku: 'CQ4018-004',
        brand: 'Nike',
        name: 'Nike Air Force 1 High 1017 ALYX 9SM Black Red',
        colorway: 'Black/Red',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2021',
        releaseDate: '2021-10-21',
        retailPrice: 450,
        estimatedMarketValue: 140,
        story: 'The 1017 ALYX 9SM x Nike Air Force 1 High ‘Bred’ applies a familiar two-tone color scheme to a premium build, highlighted by designer Matthew M. Williams’ signature flourishes. Waxed laces secure the upper, crafted from black tumbled Nappa leather and accented with ‘1017 ALYX 9SM’ in gold-stamped lettering on the lateral heel. Contrasting hits of University Red land on the signature Swoosh and leather ankle strap, the latter equipped with a dual-branded aluminum buckle. The sneaker rides on a solid black rubber cupsole with an Air-sole heel unit encapsulated in a lightweight foam wedge.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-Red/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1657116532'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/089/001/207/original/CQ4018_004.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/089/001/207/original/CQ4018_004.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/089/001/207/original/CQ4018_004.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-high-1017-alyx-9sm-black-red',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-high-bred-cq4018-004',
            flightClub: 'https://flightclub.com/1017-alyx-9sm-x-air-force-1-high-bred-cq4018-004',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '52354372-7375-4b87-8a3c-4d5bbc91ad94',
        sku: 'CQ4018-601',
        brand: 'Nike',
        name: 'Nike Air Force 1 High 1017 ALYX 9SM Red Black',
        colorway: 'Red/Black',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2021',
        releaseDate: '2021-10-21',
        retailPrice: 450,
        estimatedMarketValue: 220,
        story: 'The 1017 ALYX 9SM x Nike Air Force 1 High ‘University Red’ offers Matthew M. Williams’ eye-catching take on the vintage hoops shoe. A rich scarlet hue floods the premium tumbled leather upper, secured with tonal waxed laces and accented with gold-stamped 1017 ALYX 9SM branding on the lateral heel. Contrasting black leather accents make their way to the signature Swoosh and adjustable ankle strap, featuring a dual-branded buckle in anodized aluminum. A red rubber cupsole, enhanced with encapsulated Air-sole cushioning in the heel, anchors the high-top.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Red-Black/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1642149760'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/062/778/469/original/CQ4018_601.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/062/778/469/original/CQ4018_601.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/062/778/469/original/CQ4018_601.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-high-1017-alyx-9sm-red-black',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-high-university-red-cq4018-601',
            flightClub:
                'https://flightclub.com/1017-alyx-9sm-x-air-force-1-high-university-red-cq4018-601',
            stadiumGoods: ''
        },
        color: 'red'
    },
    {
        id: 'bcad6ce2-7820-4d6e-9e0f-d006f08b7cc5',
        sku: 'CQ4018-003',
        brand: 'Nike',
        name: 'Nike Air Force 1 High 1017 ALYX 9SM Black Grey (2021)',
        colorway: 'Black/Grey',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2021',
        releaseDate: '2021-07-09',
        retailPrice: 461,
        estimatedMarketValue: 199,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Images/Nike-Air-Force-1-High-x-1017-ALYX-9SM-Black-Grey-2021/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1660143456'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/061/833/440/original/763416_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/061/833/440/original/763416_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/061/833/440/original/763416_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-high-x-1017-alyx-9sm-black-grey-2021',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-high-black-wolf-grey-cq4018-003',
            flightClub:
                'https://flightclub.com/1017-alyx-9sm-x-air-force-1-high-black-wolf-grey-cq4018-003',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'ab9f3e88-2da0-4947-af96-8b86db8b6e61',
        sku: 'CQ4018-104',
        brand: 'Nike',
        name: 'Nike Air Force 1 High 1017 ALYX 9SM White Grey (2021)',
        colorway: 'White/Grey',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2021',
        releaseDate: '2021-07-09',
        retailPrice: 461,
        estimatedMarketValue: 275,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/064/337/111/original/766833_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/064/337/111/original/766833_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/064/337/111/original/766833_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-high-x-1017-alyx-9sm-white-grey-2021',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-high-white-wolf-grey-cq4018-104',
            flightClub:
                'https://flightclub.com/1017-alyx-9sm-x-air-force-1-high-white-wolf-grey-cq4018-104',
            stadiumGoods: ''
        },
        color: 'white'
    },
    {
        id: 'b492268a-99e6-4e9f-b352-dd7bf181975d',
        sku: 'CQ4018-002',
        brand: 'Nike',
        name: 'Nike Air Force 1 High 1017 ALYX 9SM Black White',
        colorway: 'Black/White',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2020',
        releaseDate: '2020-10-24',
        retailPrice: 450,
        estimatedMarketValue: 250,
        story: 'Made in collaboration with Matthew Williams’ cult fashion brand, the 1017 ALYX 9SM x Air Force 1 High &#39;Black White&#39; features a premium tumbled leather upper in a predominantly black finish. A white leather Swoosh matches the Nike branding hits on the woven tongue tag and heel tab, while ‘1017 ALYX 9SM’ is stamped in gold foil on the lateral heel. An additional ALYX flourish takes the form of an anodized buckle on the sneaker’s adjustable ankle strap.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347',
                'https://images.stockx.com/360/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Images/Nike-Air-Force-1-High-1017-ALYX-9SM-Black-White/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1609442347'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/079/969/012/original/593004_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/079/969/012/original/593004_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/079/969/012/original/593004_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-high-1017-alyx-9sm-black-white',
            goat: 'https://goat.com/sneakers/1017-alyx-9sm-x-air-force-1-high-black-white-cq4018-002',
            flightClub:
                'https://flightclub.com/1017-alyx-9sm-x-air-force-1-high-black-white-cq4018-002',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '7fe86dee-f794-4f73-b097-8936ba9eb792',
        sku: 'DC9964-010',
        brand: 'Nike',
        name: 'Nike The 1971 Black White',
        colorway: 'Black/White',
        gender: 'men',
        silhouette: 'Nike 1971',
        releaseYear: '2021',
        releaseDate: '2021-12-06',
        retailPrice: 240,
        estimatedMarketValue: 125,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/064/893/056/original/DC9964_010.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/064/893/056/original/DC9964_010.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/064/893/056/original/DC9964_010.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-the-1971-black-white',
            goat: 'https://goat.com/sneakers/1971-black-white-dc9964-010',
            flightClub: 'https://flightclub.com/1971-black-white-dc9964-010',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'c3b926f1-3d86-4d55-9df4-b8635ba09e39',
        sku: '586367-001',
        brand: 'Nike',
        name: 'Nike 1972 Super Bowl Pack Trophy',
        colorway: 'Metallic Silver/White/Silver',
        gender: 'men',
        silhouette: '1972',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 0,
        estimatedMarketValue: 300,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/001/270/952/original/586367_001.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/001/270/952/original/586367_001.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/001/270/952/original/586367_001.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-1972-super-bowl-pack-trophy',
            goat: 'https://goat.com/sneakers/1972-qs-586367-001',
            flightClub: 'https://flightclub.com/1972-qs-586367-001',
            stadiumGoods: ''
        },
        color: ''
    },
    {
        id: '5915f48c-a96b-4558-a331-7b2fda3a2753',
        sku: '586367-200',
        brand: 'Nike',
        name: 'Nike 1972 Dark Brown',
        colorway: 'Dark Brown/Dark Brown',
        gender: 'men',
        silhouette: '1972',
        releaseYear: '2013',
        releaseDate: '2013-04-20',
        retailPrice: 140,
        estimatedMarketValue: 1300,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221',
                'https://images.stockx.com/360/Nike-1972-Dark-Brown/Images/Nike-1972-Dark-Brown/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1626899221'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/000/036/735/original/586367_200.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/000/036/735/original/586367_200.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/000/036/735/original/586367_200.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-1972-dark-brown',
            goat: 'https://goat.com/sneakers/1972-qs-586367-200',
            flightClub: 'https://flightclub.com/1972-qs-586367-200',
            stadiumGoods: ''
        }
    },
    {
        id: 'd690334d-258f-4b4d-b470-8ea8bc7983b1',
        sku: '586367-600',
        brand: 'Nike',
        name: 'Nike 1972 Dress Code',
        colorway: 'Deep Red/Deep Red-Sail',
        gender: 'men',
        silhouette: '1972',
        releaseYear: '2013',
        releaseDate: '2013-04-20',
        retailPrice: 160,
        estimatedMarketValue: 992,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/000/036/736/original/586367_600.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/000/036/736/original/586367_600.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/000/036/736/original/586367_600.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-1972-dress-code',
            goat: 'https://goat.com/sneakers/1972-qs-dress-code-586367-600',
            flightClub: 'https://flightclub.com/1972-qs-dress-code-586367-600',
            stadiumGoods: ''
        },
        color: 'red'
    },
    {
        id: '3b0059ff-a170-496b-9416-f0fed406c246',
        sku: '361321-201',
        brand: 'Nike',
        name: 'Nike Zoom Encore High 3 Inches of Blood',
        colorway: 'Black/Deep Red',
        gender: 'men',
        silhouette: 'Air Zoom Oncore',
        releaseYear: '2009',
        releaseDate: '2009-05-01',
        retailPrice: 0,
        estimatedMarketValue: 340,
        story: '',
        image: {
            '360': [],
            original: '',
            small: '',
            thumbnail: ''
        },
        links: {
            stockX: 'https://stockx.com/nike-zoom-encore-high-3-inches-of-blood',
            goat: 'https://goat.com/sneakers/3-inches-of-blood-x-6-0-zoom-oncore-high-premium-black-team-red-361321-201',
            flightClub: '',
            stadiumGoods: ''
        }
    },
    {
        id: '26290dcb-3ba5-40ff-b390-a5d5925d8304',
        sku: '314192-097',
        brand: 'Nike',
        name: 'Nike Air Force 1 Pure Platinum (GS)',
        colorway: 'Pure Platinum/Poison Green Hyper Blue Volt',
        gender: 'child',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 75,
        estimatedMarketValue: 75,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/006/875/424/original/314192_097.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/006/875/424/original/314192_097.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/006/875/424/original/314192_097.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-zoom-structure-22-blackened-blue-c',
            goat: 'https://goat.com/sneakers/314192-097-3f084d83-5985-4e93-9081-423f0370aaed',
            flightClub: 'https://flightclub.com/314192-097-3f084d83-5985-4e93-9081-423f0370aaed',
            stadiumGoods: ''
        }
    },
    {
        id: '11d598e4-6238-4d68-a3bb-aa2cb766cf7a',
        sku: 'CT2296-003',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 07 3M Anthracite Silver',
        colorway: 'Anthracite/Silver/University Red/White',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 90,
        estimatedMarketValue: 77,
        story: 'The 3M x Nike Air Force 1 ‘07 ‘Anthracite Silver’ updates the iconic silhouette with a high-visibility element. The black leather upper is accented with a reflective silver Swoosh outlined in contrast red stitching and covered in 3M branding. A crimson Nike wordmark decorates the heel tab and woven tongue tag. The sneaker is mounted on a solid white rubber cupsole, featuring an Air-sole heel unit encapsulated in polyurethane. Underfoot, a pivot-point traction pattern delivers optimal grip.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/052/697/859/original/CT2296_003.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/052/697/859/original/CT2296_003.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/052/697/859/original/CT2296_003.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-07-3m-anthracite-silver',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-07-anthracite-silver-ct2296-003',
            flightClub: 'https://flightclub.com/3m-x-air-force-1-07-anthracite-silver-ct2296-003',
            stadiumGoods:
                'https://sale.stadiumgoods.com/nike-air-force-1-07-3m-anthracite-ct2296-003'
        },
        color: 'black'
    },
    {
        id: 'd431ed20-5667-4a34-a342-ce31d83e3b9b',
        sku: 'CT2299-001',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3M Black',
        colorway: 'Black/Black-Metallic Silver',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2020',
        releaseDate: '2020-11-16',
        retailPrice: 115,
        estimatedMarketValue: 85,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Black/Images/Nike-Air-Force-1-Low-3M-Black/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1647546265'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/071/556/325/original/703200_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/071/556/325/original/703200_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/071/556/325/original/703200_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3m-black',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-07-lv8-black-ct2299-001',
            flightClub: 'https://flightclub.com/3m-x-air-force-1-07-lv8-black-ct2299-001',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'eb0ae67a-5a0c-4b82-9a37-3cf7944dc36e',
        sku: 'CT2299-800',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3M Total Orange',
        colorway: 'Total Orange/Metallic Silver-Black',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 130,
        estimatedMarketValue: 130,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Total-Orange/Images/Nike-Air-Force-1-Low-3M-Total-Orange/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1638981269'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/080/567/755/original/708063_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/080/567/755/original/708063_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/080/567/755/original/708063_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3m-total-orange',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-07-se-total-orange-ct2299-800',
            flightClub: 'https://flightclub.com/3m-x-air-force-1-07-se-total-orange-ct2299-800',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '9586f40c-1aa7-4287-a7d6-08009d232500',
        sku: 'CT2296-100',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3M Swoosh White',
        colorway: 'White/Metallic Silver-Total Orange-White',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2020',
        releaseDate: '2020-11-16',
        retailPrice: 130,
        estimatedMarketValue: 85,
        story: 'The 3M x Nike Air Force 1 ‘07 ‘White’ places the spotlight on the sneaker’s signature branding element. Standing out against a white leather backdrop is a silver reflective Swoosh, featuring a repeating 3M logo print and contrast red stitching. Additional hits of crimson land on Nike branding hits atop the woven tongue tag and heel tab. The sneaker is mounted on a standard rubber cupsole, featuring encapsulated Air-sole cushioning and a pivot-point rubber outsole.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3M-Swoosh-White/Images/Nike-Air-Force-1-Low-3M-Swoosh-White/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1646120116'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/100/003/008/original/703149_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/100/003/008/original/703149_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/100/003/008/original/703149_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3m-swoosh-white',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-07-white-ct2296-100',
            flightClub: 'https://flightclub.com/3m-x-air-force-1-07-white-ct2296-100',
            stadiumGoods: 'https://sale.stadiumgoods.com/nike-air-force-1-07-3m-ct2296-100'
        },
        color: 'white'
    },
    {
        id: 'a81d55a0-33e2-41de-87a2-55c318e0bd28',
        sku: 'CT2299-100',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3M Summit White',
        colorway: 'Summit White/Summit White-Black',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 130,
        estimatedMarketValue: 69,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/100/867/188/original/674442_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/100/867/188/original/674442_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/100/867/188/original/674442_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3m-summit-white',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-low-white-ct2299-100',
            flightClub: 'https://flightclub.com/3m-x-air-force-1-low-white-ct2299-100',
            stadiumGoods:
                'https://sale.stadiumgoods.com/nike-air-force-1-low-3m-summit-white-ct2299-100'
        },
        color: 'white'
    },
    {
        id: '6ab4c32f-208a-4a68-b44d-1feaa6184acc',
        sku: 'CT3316-001',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low React 3M Pack Pure Platinum Baltic Blue',
        colorway: 'Pure Platinum/Baltic Blue/Habanero Red/Black',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2020',
        releaseDate: '2020-10-28',
        retailPrice: 140,
        estimatedMarketValue: 217,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/061/006/806/original/CT3316_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/061/006/806/original/CT3316_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/061/006/806/original/CT3316_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-react-3m-pack-pure-platinum-baltic-blue',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-react-lx-pure-platinum-baltic-blue-ct3316-001',
            flightClub:
                'https://flightclub.com/3m-x-air-force-1-react-lx-pure-platinum-baltic-blue-ct3316-001',
            stadiumGoods: ''
        },
        color: 'grey'
    },
    {
        id: 'f50896c8-cc6b-498c-8d09-d59796f4aa7e',
        sku: 'CT3316-003',
        brand: 'Nike',
        name: 'Nike Air Force 1 React 3M Pack',
        colorway: 'Anthracite/Black-Volt-Habanero Red',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2020',
        releaseDate: '2020-05-11',
        retailPrice: 140,
        estimatedMarketValue: 47,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799',
                'https://images.stockx.com/360/Nike-Air-Force-1-React-3M-Pack/Images/Nike-Air-Force-1-React-3M-Pack/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1665124799'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/100/652/856/original/708062_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/100/652/856/original/708062_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/100/652/856/original/708062_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-react-3m-pack',
            goat: 'https://goat.com/sneakers/3m-x-air-force-1-react-lx-anthracite-volt-ct3316-003',
            flightClub:
                'https://flightclub.com/3m-x-air-force-1-react-lx-anthracite-volt-ct3316-003',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'd58cce60-d48e-4c45-8db2-31c7dd36827a',
        sku: 'CW8336-001',
        brand: 'Nike',
        name: 'Nike Air Max 2090 SE 3M Anthracite',
        colorway: 'Anthracite/Volt/Black',
        gender: 'men',
        silhouette: 'Air Max 2090',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 130,
        estimatedMarketValue: 75,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/098/451/374/original/776525_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/098/451/374/original/776525_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/098/451/374/original/776525_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-2090-se-3m-anthracite',
            goat: 'https://goat.com/sneakers/3m-x-air-max-2090-se-anthracite-cw8336-001',
            flightClub: 'https://flightclub.com/3m-x-air-max-2090-se-anthracite-cw8336-001',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'ea9f80bb-36fb-42f4-88b1-bf452fc95730',
        sku: 'CT1647-001',
        brand: 'Nike',
        name: 'Nike Air Max 270 React SE 3M Anthracite Reflective',
        colorway: 'Anthracite/Reflective Silver/Toner Black/Black/Peak White/Fluorescent Yellow',
        gender: 'men',
        silhouette: 'Air Max 270 React',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 0,
        estimatedMarketValue: 93,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/047/923/924/original/CT1647_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/047/923/924/original/CT1647_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/047/923/924/original/CT1647_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-270-react-se-3m-anthracite-reflective',
            goat: 'https://goat.com/sneakers/3m-x-air-max-270-react-se-black-reflective-silver-ct1647-001',
            flightClub:
                'https://flightclub.com/3m-x-air-max-270-react-se-black-reflective-silver-ct1647-001',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '8b799529-467a-47b7-95d2-c42faeac3620',
        sku: 'CZ2975-002',
        brand: 'Nike',
        name: 'Nike Air Max 90 3M Pack',
        colorway: 'Anthracite/Anthracite-Volt-Black',
        gender: 'men',
        silhouette: 'Air Max 90',
        releaseYear: '2020',
        releaseDate: '2020-11-16',
        retailPrice: 150,
        estimatedMarketValue: 75,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395',
                'https://images.stockx.com/360/Nike-Air-Max-90-3M-Pack/Images/Nike-Air-Max-90-3M-Pack/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624462395'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/086/637/780/original/683453_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/086/637/780/original/683453_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/086/637/780/original/683453_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-90-3m-pack',
            goat: 'https://goat.com/sneakers/3m-x-air-max-90-anthracite-volt-cz2975-002',
            flightClub: 'https://flightclub.com/3m-x-air-max-90-anthracite-volt-cz2975-002',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'ba7f8656-5830-4703-995a-0bd80d2b99e2',
        sku: 'CZ2975-001',
        brand: 'Nike',
        name: 'Nike Air Max 90 3M Pack Light Bone',
        colorway: 'Light Bone/Black-Total Orange',
        gender: 'men',
        silhouette: 'Air Max 90',
        releaseYear: '2018',
        releaseDate: '2018-01-01',
        retailPrice: 150,
        estimatedMarketValue: 107,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/045/793/514/original/CZ2975_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/045/793/514/original/CZ2975_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/045/793/514/original/CZ2975_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-90-3m-pack-light-bone',
            goat: 'https://goat.com/sneakers/3m-x-air-max-90-light-bone-cz2975-001',
            flightClub: 'https://flightclub.com/3m-x-air-max-90-light-bone-cz2975-001',
            stadiumGoods: ''
        },
        color: 'white'
    },
    {
        id: 'bbe5b2c2-7499-4ff8-b567-a6feda014815',
        sku: 'DB4609-300',
        brand: 'Nike',
        name: 'Nike Air Max Plus 3M Twilight Marsh',
        colorway: 'Twilight Marsh/Anthracite-Summit White-Volt',
        gender: 'men',
        silhouette: 'Air Max Plus',
        releaseYear: '2020',
        releaseDate: '',
        retailPrice: 170,
        estimatedMarketValue: 253,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/092/950/389/original/DB4609_300.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/092/950/389/original/DB4609_300.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/092/950/389/original/DB4609_300.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-plus-3m-twilight-marsh',
            goat: 'https://goat.com/sneakers/3m-x-air-max-plus-se-twilight-marsh-db4609-300',
            flightClub: '',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '6a40963a-78a3-4267-8ce1-8ffd43d1a88b',
        sku: 'CU1463-001',
        brand: 'Nike',
        name: 'Nike React Vision Premium 3M Anthracite Volt',
        colorway: 'Anthracite/Black/Volt',
        gender: 'men',
        silhouette: 'React Vision',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 150,
        estimatedMarketValue: 59,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/046/083/426/original/CU1463_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/046/083/426/original/CU1463_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/046/083/426/original/CU1463_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-react-vision-premium-3m-anthracite-volt',
            goat: 'https://goat.com/sneakers/3m-x-react-vision-premium-anthracite-volt-cu1463-001',
            flightClub:
                'https://flightclub.com/3m-x-react-vision-premium-anthracite-volt-cu1463-001',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'c0a6fe3c-8c5f-46a2-9ef1-6cf140adab38',
        sku: 'CT1992-101',
        brand: 'Nike',
        name: "Nike Air Force 1 Low 07 SE 3M Light Orewood Brown (Women's)",
        colorway: 'Light Orewood Brown/Metallic Silver',
        gender: 'women',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 110,
        estimatedMarketValue: 51,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/046/083/415/original/CT1992_101.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/046/083/415/original/CT1992_101.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/046/083/415/original/CT1992_101.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-07-se-3m-light-orewood-brown-w',
            goat: 'https://goat.com/sneakers/3m-x-wmns-air-force-1-07-se-light-orewood-brown-ct1992-101',
            flightClub:
                'https://flightclub.com/3m-x-wmns-air-force-1-07-se-light-orewood-brown-ct1992-101',
            stadiumGoods: ''
        }
    },
    {
        id: '7d9c095c-5089-4074-b4ee-f07b0fd0728a',
        sku: 'CT1992-001',
        brand: 'Nike',
        name: "Nike Air Force 1 Low 07 SE 3M Black (Women's)",
        colorway: 'Black/Reflect Silver/Metallic Silver',
        gender: 'women',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 110,
        estimatedMarketValue: 92,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/046/083/413/original/CT1992_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/046/083/413/original/CT1992_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/046/083/413/original/CT1992_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-07-se-3m-black-w',
            goat: 'https://goat.com/sneakers/3m-x-wmns-air-force-1-07-se-black-ct1992-001',
            flightClub: 'https://flightclub.com/3m-x-wmns-air-force-1-07-se-black-ct1992-001',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '3740525f-03a9-4ef5-8cf7-9800d5b03ee3',
        sku: 'CT1992-100',
        brand: 'Nike',
        name: "Nike Air Force 1 Low 07 SE 3M Summit White (Women's)",
        colorway: 'Summit White/Summit White/Black',
        gender: 'women',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 110,
        estimatedMarketValue: 96,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/046/083/414/original/CT1992_100.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/046/083/414/original/CT1992_100.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/046/083/414/original/CT1992_100.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-07-se-3m-summit-white-w',
            goat: 'https://goat.com/sneakers/3m-x-wmns-air-force-1-07-se-summit-white-ct1992-100',
            flightClub:
                'https://flightclub.com/3m-x-wmns-air-force-1-07-se-summit-white-ct1992-100',
            stadiumGoods: ''
        },
        color: 'white'
    },
    {
        id: '8597d339-9f26-46c9-9cd3-d7e34f1d11be',
        sku: 'CT1935-001',
        brand: 'Nike',
        name: "Nike Air Max 95 SE 3M Pack Silver (Women's)",
        colorway: 'Black/Silver/Natural',
        gender: 'women',
        silhouette: 'Air Max 95',
        releaseYear: '2020',
        releaseDate: '',
        retailPrice: 160,
        estimatedMarketValue: 236,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/061/006/805/original/CT1935_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/061/006/805/original/CT1935_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/061/006/805/original/CT1935_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-95-se-3m-pack-silver-w',
            goat: 'https://goat.com/sneakers/3m-x-wmns-air-max-95-black-metallic-silver-ct1935-001',
            flightClub:
                'https://flightclub.com/3m-x-wmns-air-max-95-black-metallic-silver-ct1935-001',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: '4a9f5fd9-6026-4a4d-9acc-96b13a9aae72',
        sku: 'CU7763-100',
        brand: 'Nike',
        name: "Nike TC 7900 LX 3M Light Orewood Brown (Women's)",
        colorway: 'Light Orewood Brown/Black-Hyper Crimson-Reflect Silver',
        gender: 'women',
        silhouette: 'TC 7900',
        releaseYear: '2020',
        releaseDate: '2020-11-11',
        retailPrice: 120,
        estimatedMarketValue: 74,
        story: 'The 3M x Nike women’s TC 7900 LX ‘Light Orewood Brown’ features a mostly subdued color scheme on a durable lifestyle silhouette laden with utilitarian details. Thinsulate insulation adds warmth to the khaki textile upper, equipped with 3M Scotchlite reflective accents and a series of webbing straps for a distinctly outdoor aesthetic. The sneaker rides on a plush foam midsole, supported by durable rubber under the heel and forefoot for grippy traction.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844',
                'https://images.stockx.com/360/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Images/Nike-TC-7900-LX-3M-Light-Orewood-Brown-W/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1624633844'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/100/373/020/original/703432_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/100/373/020/original/703432_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/100/373/020/original/703432_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-tc-7900-lx-3m-light-orewood-brown-w',
            goat: 'https://goat.com/sneakers/3m-x-wmns-tc-7900-lx-light-orewood-brown-cu7763-100',
            flightClub:
                'https://flightclub.com/3m-x-wmns-tc-7900-lx-light-orewood-brown-cu7763-100',
            stadiumGoods: 'https://sale.stadiumgoods.com/nike-tc-7900-lx-wmns-3m-cu7763-100'
        },
        color: 'black'
    },
    {
        id: '29d1ada9-4e93-40a9-b2ef-e3bf426a1997',
        sku: 'CU7763-600',
        brand: 'Nike',
        name: "Nike TC 7900 LX 3M Pink Blast (Women's)",
        colorway: 'Pink Blast/Light Orewood Brown-Hyper Crimson-Reflect Silver',
        gender: 'women',
        silhouette: 'TC 7900',
        releaseYear: '2020',
        releaseDate: '2020-11-11',
        retailPrice: 120,
        estimatedMarketValue: 36,
        story: 'The 3M x Nike women’s TC 7900 LX ‘Pink Blast’ showcases a vibrant finish on a lifestyle sneaker built for outdoor adventures. The pink textile upper is outfitted with workwear-inspired details, including Thinsulate insulation and 3M Scotchlite reflective accents. Webbing straps and a rubber heel patch add to the sneaker’s utilitarian sensibilities. The lightweight build sits atop a sculpted foam midsole, reinforced by a two-part rubber outsole for flexible traction.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/045/300/964/original/CU7763_600.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/045/300/964/original/CU7763_600.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/045/300/964/original/CU7763_600.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-tc-7900-lx-3m-pink-blast-w',
            goat: 'https://goat.com/sneakers/3m-x-wmns-tc-7900-lx-pink-blast-cu7763-600',
            flightClub: 'https://flightclub.com/3m-x-wmns-tc-7900-lx-pink-blast-cu7763-600',
            stadiumGoods: ''
        },
        color: 'pink'
    },
    {
        id: 'fc7d92e0-d563-46c8-865d-08699d132b88',
        sku: '905345-006',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3x1 Denim Black',
        colorway: 'Black/Black-Summit White',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2019',
        releaseDate: '2019-05-24',
        retailPrice: 130,
        estimatedMarketValue: 79,
        story: 'Introduced in May 2019, the 3x1 x Nike Air Force 1 Low Premium sneaker unites the timeless American style of the atelier with the icon&#39;s court-bred heritage. This &#39;Black Denim&#39; edition flaunts inky Swooshes on a two-tone black denim upper, custom tongue and heel logos and single-wrapped sidewall trim. Co-branding is hidden on the footbed. The Air-encapsulating foam midsole and durable, traction-ready outsole return to finish the look.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Black/Images/Nike-Air-Force-1-Low-3x1-Denim-Black/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607646952'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/079/328/454/original/499215_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/079/328/454/original/499215_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/079/328/454/original/499215_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3x1-denim-black',
            goat: 'https://goat.com/sneakers/3x1-x-air-force-1-low-premium-black-denim-905345-006',
            flightClub: 'https://flightclub.com/3x1-x-air-force-1-low-premium-136224',
            stadiumGoods: 'https://sale.stadiumgoods.com/nike-air-force-1-07-prm-905345-006'
        }
    },
    {
        id: 'a483686d-a7f1-45eb-9480-5d3531380c4f',
        sku: '905345-402',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3x1 Denim Raw Indigo',
        colorway: 'Raw Indigo/Raw Indigo-Dark Obsidian-Total Orange-Summit White',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2019',
        releaseDate: '2019-05-24',
        retailPrice: 130,
        estimatedMarketValue: 129,
        story: 'The 3x1 x Nike Air Force 1 Low Premium sneaker gives the hoops icon a custom look as inspired by the luxury denim atelier. Launched in May 2019, this &#39;Raw Indigo&#39; makeover emulates jeans with embroidered eyelets, a darkened tongue and heel with signature labels and a single-wrapped trim on the lower sidewall. Concealed Air, a foam midsole with a star bumper and basketball-inspired tread on the rubber outsole are preserved below.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Images/Nike-Air-Force-1-Low-3x1-Denim-Raw-Indigo/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606323786'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/021/435/201/original/905345_402.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/021/435/201/original/905345_402.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/021/435/201/original/905345_402.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3x1-denim-raw-indigo',
            goat: 'https://goat.com/sneakers/3x1-x-air-force-1-low-premium-denim-905345-402',
            flightClub: 'https://flightclub.com/3x1-x-air-force-1-low-premium-136215',
            stadiumGoods: 'https://sale.stadiumgoods.com/nike-air-force-1-07-prm-3x1-905345-402'
        }
    },
    {
        id: '40aa30b8-9bb0-4b37-9df6-b0254e965d54',
        sku: '905345-403',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low 3x1 Denim Stonewash',
        colorway: 'Stonewash Blue/Dark Obsidian-Summit White',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2019',
        releaseDate: '2019-05-24',
        retailPrice: 130,
        estimatedMarketValue: 150,
        story: 'The 3x1 x Nike Air Force 1 Low Premium sneaker imbues the court icon with the bespoke spirit of the luxury denim label. Debuted in May 2019, this &#39;Stonewash Blue&#39; version carries a Swoosh in twill with a bright frame, classic logos on the contrast tongue and heel patch and two-tone sidewall piping. Co-branding appears on the footbed. Signature midsole Air and a rubber outsole with concentric tread stay true to the style&#39;s roots.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Images/Nike-Air-Force-1-Low-3x1-Denim-Stonewash/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607647452'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/079/328/438/original/499211_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/079/328/438/original/499211_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/079/328/438/original/499211_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-3x1-denim-stonewash',
            goat: 'https://goat.com/sneakers/3x1-x-air-force-1-low-premium-blue-denim-905345-403',
            flightClub: 'https://flightclub.com/3x1-x-air-force-1-low-premium-136211',
            stadiumGoods: ''
        }
    },
    {
        id: 'a3e1a72d-0682-4434-a481-3e75d76838f1',
        sku: '554716-887',
        brand: 'Nike',
        name: 'Nike Air Max 97 EM Sunset',
        colorway: 'Team Orange/Team Orange-Tour Yellow-Black',
        gender: 'men',
        silhouette: 'Air Max 97',
        releaseYear: '2013',
        releaseDate: '2013-06-01',
        retailPrice: 155,
        estimatedMarketValue: 155,
        story: 'June 2013 saw Nike assemble a collection of classic Air Max sneakers, each featuring an engineered mesh build topped off with fiery coloring meant to evoke the setting sun. This Air Max 97 is one of five silhouettes collected under that Sunset Pack banner. It features a gradient combination of orange and yellow on the mesh upper, accented with reflective silver wave overlays and a contrasting black mudguard.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/001/678/805/original/554716_887.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/001/678/805/original/554716_887.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/001/678/805/original/554716_887.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-max-97-em-sunset',
            goat: 'https://goat.com/sneakers/554716-887-113a3442-cc9c-4e50-92db-6fbb5e266798',
            flightClub: 'https://flightclub.com/554716-887-113a3442-cc9c-4e50-92db-6fbb5e266798',
            stadiumGoods: ''
        }
    },
    {
        id: '1d564992-737a-4d36-95be-60d027095106',
        sku: 'CZ5130-600',
        brand: 'Nike',
        name: 'Nike SB Dunk Low 7-Eleven',
        colorway: 'Chile Red/White-Safety Orange',
        gender: 'men',
        silhouette: 'Dunk SB',
        releaseYear: '2020',
        releaseDate: '2020-04-19',
        retailPrice: 100,
        estimatedMarketValue: 992,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539',
                'https://images.stockx.com/360/Nike-SB-Dunk-Low-7-Eleven/Images/Nike-SB-Dunk-Low-7-Eleven/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608516539'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/083/103/384/original/626867_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/083/103/384/original/626867_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/083/103/384/original/626867_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-sb-dunk-low-7-eleven',
            goat: 'https://goat.com/sneakers/7-eleven-x-dunk-low-sb-711dunksb',
            flightClub: 'https://flightclub.com/7-eleven-x-dunk-low-sb-711dunksb',
            stadiumGoods: 'https://www.stadiumgoods.com/nike-sb-dunk-low-7-eleven-cz5130-600'
        }
    },
    {
        id: '5d4e8652-cbd5-4599-b05c-c55f6f33d0d8',
        sku: '845168-990',
        brand: 'Nike',
        name: '"Nike SFB 8"" Boot Jungle Realtree"',
        colorway: 'Coyote/Coyote',
        gender: 'men',
        silhouette: 'SFB',
        releaseYear: '2017',
        releaseDate: '2017-01-01',
        retailPrice: 180,
        estimatedMarketValue: 200,
        story: 'The military-inspired design of the Nike 8 Inch SFB Realtree WP hunting boot provides high-performance wear through rugged, outdoor conditions. Its quick-drying waterproof leather and canvas upper is shielded by Realtree camouflage panels and secured with a locked down web-lacing system. The cushioned midsole sits on Kevlar layering, a puncture-resistant internal rock shield and a durable outsole for protective wear.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/014/135/957/original/845168_990.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/014/135/957/original/845168_990.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/014/135/957/original/845168_990.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-sfb-8-boot-jungle-realtree',
            goat: 'https://goat.com/sneakers/8-inch-sfb-realtree-wp-845168-990',
            flightClub: 'https://flightclub.com/8-inch-sfb-realtree-wp-845168-990',
            stadiumGoods: ''
        }
    },
    {
        id: '08e463e1-1d72-463b-bb2a-e4e414faf829',
        sku: 'AO7507-001',
        brand: 'Nike',
        name: 'Nike Special Field Boot 8 Inch Black',
        colorway: 'Black/Black',
        gender: 'men',
        silhouette: 'Special Field Boot',
        releaseYear: '2021',
        releaseDate: '2021-11-03',
        retailPrice: 170,
        estimatedMarketValue: 170,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042',
                'https://images.stockx.com/360/Special-Field-Boot-8-Inch-Black/Images/Special-Field-Boot-8-Inch-Black/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1612296042'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/020/306/901/original/AO7507_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/020/306/901/original/AO7507_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/020/306/901/original/AO7507_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/special-field-boot-8-inch-black',
            goat: 'https://goat.com/sneakers/8-inch-special-field-boot-triple-black-ao7507-001',
            flightClub: 'https://flightclub.com/8-inch-special-field-boot-triple-black-ao7507-001',
            stadiumGoods: ''
        }
    },
    {
        id: '48b95edd-2f8c-4c77-ae53-86d80b006134',
        sku: 'AQ1199-001',
        brand: 'Nike',
        name: '"Nike SFB Field 2 8"" GORE-TEX Black"',
        colorway: 'Black/Black',
        gender: 'men',
        silhouette: 'Special Field Boot',
        releaseYear: '2019',
        releaseDate: '2019-11-20',
        retailPrice: 170,
        estimatedMarketValue: 170,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736',
                'https://images.stockx.com/360/Nike-SFB-Field-2-8-Gore-tex-Black/Images/Nike-SFB-Field-2-8-Gore-tex-Black/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1635269736'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/031/523/355/original/AQ1199_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/031/523/355/original/AQ1199_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/031/523/355/original/AQ1199_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-sfb-field-2-8-gore-tex-black',
            goat: 'https://goat.com/sneakers/8-inch-special-field-boot-black-aq1199-001',
            flightClub: 'https://flightclub.com/8-inch-special-field-boot-black-aq1199-001',
            stadiumGoods: ''
        }
    },
    {
        id: '4c08540a-c9b3-4cc9-83f3-4e96ec45224b',
        sku: '833802-500',
        brand: 'Nike',
        name: "Nike Mayfly Woven Plum Fog Sail (Women's)",
        colorway: 'Plum Fog/Plum Fog-Sail',
        gender: 'women',
        silhouette: 'Mayfly',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 120,
        estimatedMarketValue: 120,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/006/875/462/original/833802_500.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/006/875/462/original/833802_500.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/006/875/462/original/833802_500.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-mayfly-woven-plum-fog-sail-w',
            goat: 'https://goat.com/sneakers/833802-500-624ba7f1-7d3e-44e7-a43d-9c4873fffadc',
            flightClub: 'https://flightclub.com/833802-500-624ba7f1-7d3e-44e7-a43d-9c4873fffadc',
            stadiumGoods: ''
        },
        color: 'pink'
    },
    {
        id: 'd755a729-3023-4bfc-ac23-5a2513b982c2',
        sku: '844929-001',
        brand: 'Nike',
        name: "Nike Roshe Two Flyknit Black Black White (Women's)",
        colorway: 'Black/Black/White',
        gender: 'women',
        silhouette: 'Roshe',
        releaseYear: '2019',
        releaseDate: '2019-01-01',
        retailPrice: 130,
        estimatedMarketValue: 100,
        story: '',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/006/875/475/original/844929_001.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/006/875/475/original/844929_001.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/006/875/475/original/844929_001.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-roshe-two-flyknit-black-black-white-w',
            goat: 'https://goat.com/sneakers/844929-001-e24b4e2d-123b-4179-a521-ffc7c4cb3364',
            flightClub: 'https://flightclub.com/roshe-two-flyknit-black-white-145359',
            stadiumGoods: ''
        },
        color: 'black'
    },
    {
        id: 'e4bab7d4-7d5b-40ee-9647-a78c730620e4',
        sku: '917825-400',
        brand: 'Nike',
        name: "Nike Air Force 1 Low '07 Indigo Armory Navy Armory Navy",
        colorway: 'Armory Navy/Armory Navy',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '0',
        releaseDate: '',
        retailPrice: 130,
        estimatedMarketValue: 77,
        story: '',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611',
                'https://images.stockx.com/360/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Images/Nike-Air-Force-1-07-Indigo-Armory-Navy-Armory-Navy/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1616553611'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/095/562/946/original/234858_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/095/562/946/original/234858_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/095/562/946/original/234858_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-07-indigo-armory-navy-armory-navy',
            goat: 'https://goat.com/sneakers/917825-400-bbe71228-0ec6-4912-8937-91649bc67031',
            flightClub: 'https://flightclub.com/917825-400-bbe71228-0ec6-4912-8937-91649bc67031',
            stadiumGoods: ''
        },
        color: 'blue'
    },
    {
        id: '513601aa-79da-4d23-aa17-a881f74d7799',
        sku: 'DO9825-900',
        brand: 'Nike',
        name: 'Nike KD 15 Cardo',
        colorway: 'Multi-Colour/Multi-Colour',
        gender: 'men',
        silhouette: 'KD 15',
        releaseYear: '2022',
        releaseDate: '2022-08-26',
        retailPrice: 160,
        estimatedMarketValue: 75,
        story: 'The Cardo x Nike KD 15 delivers the hip-hop producer’s colorful take on Kevin Durant’s 15th signature shoe. The patterned grey knit upper is reinforced with TPU wings in mismatched hues: solid grey on the medial side of each shoe, while the lateral sides feature a pale green finish on the left shoe and a vibrant orange finish on the right. ‘KD’ and ‘Cardo’ are embroidered on each tongue, continuing the shoe’s asymmetrical design theme. A full-length Air Zoom Strobel works in tandem with a blue Cushlon midsole, accented with iridescent detailing and supported by a semi-translucent green rubber outsole.',
        image: {
            '360': [],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/083/861/552/original/1015393_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/083/861/552/original/1015393_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/083/861/552/original/1015393_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-kd-15-cardo',
            goat: 'https://goat.com/sneakers/9th-wonder-x-kd-15-do9825-900',
            flightClub: 'https://flightclub.com/9th-wonder-x-kd-15-do9825-900',
            stadiumGoods: ''
        },
        color: 'white'
    },
    {
        id: 'fff0898b-9d73-4d77-b0ae-475a62a0a495',
        sku: 'BQ6924-001',
        brand: 'Nike',
        name: 'Nike Air Force 1 Low A Cold Wall Black',
        colorway: 'Black/White-Dark Grey',
        gender: 'men',
        silhouette: 'Air Force 1',
        releaseYear: '2018',
        releaseDate: '2018-12-21',
        retailPrice: 190,
        estimatedMarketValue: 78,
        story: 'The A-Cold-Wall* x Air Force 1 Low ‘Black’ sees the London-based fashion label utilize Nike’s Flyleather material, which is made with at least 50 percent recycled natural leather fiber. The resulting design promotes a sustainable narrative while showcasing a new take on the classic silhouette. Rendered in black Flyleather and grey suede with a perforated Swoosh, the shoe also sports a revised lacing system and A-Cold-Wall* logo hits on the tongue and lateral forefoot.',
        image: {
            '360': [
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img02.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img03.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img04.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img05.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img06.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img07.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img08.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img09.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img10.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img11.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img12.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img13.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img14.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img15.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img16.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img17.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img18.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img19.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img20.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img21.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img22.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img23.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img24.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img25.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img26.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img27.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img28.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img29.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img30.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img31.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img32.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img33.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img34.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img35.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909',
                'https://images.stockx.com/360/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Images/Nike-Air-Force-1-Low-A-Cold-Wall-Black/Lv2/img36.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1607049909'
            ],
            original:
                'https://image.goat.com/attachments/product_template_pictures/images/079/018/367/original/468805_00.png.png',
            small: 'https://image.goat.com/750/attachments/product_template_pictures/images/079/018/367/original/468805_00.png.png',
            thumbnail:
                'https://image.goat.com/375/attachments/product_template_pictures/images/079/018/367/original/468805_00.png.png'
        },
        links: {
            stockX: 'https://stockx.com/nike-air-force-1-low-a-cold-wall-black',
            goat: 'https://goat.com/sneakers/a-cold-wall-x-air-force-1-low-black-acw-af1-l-blk',
            flightClub: 'https://flightclub.com/air-force-1-07-acw-black-white-dark-grey-806423',
            stadiumGoods:
                'https://sale.stadiumgoods.com/nike-air-force-1-07-acw-a-cold-wall-bq6924-001'
        },
        color: 'black'
    }
];

const featuredProductList: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {sampleData.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    description={product.name}
                    thumbnail={product.image.thumbnail}
                    price={product.retailPrice}
                    brand={product.brand}
                    gender={product.gender}
                    link={product.links.goat}
                    onClick={() => window.open(product.links.goat, '_blank')}
                />
            ))}
        </div>
    );
};

export default featuredProductList;
