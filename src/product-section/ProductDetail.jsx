// ProductDetail.jsx
import React from 'react';
import ProductList from './ProductList';
import { useParams } from 'react-router-dom';

// Import all images
import productImage from '../assets/pecoshield-2k.webp';
import pecobondImage from '../assets/pecobond.webp';
import pecoflexImage from '../assets/pecoFlex.webp';
import pecogripImage from '../assets/pecogrip.webp';
import pecoPrime from '../assets/pecoprime.webp';
import epoxyGroutBucket from '../assets/epoxy-grout-bucket.webp';
import polumerTileGrout from '../assets/polumer-tile-grout.webp';
import whiteCement from '../assets/white-cement.webp';
import Water from '../assets/water.webp';
import SaveCement from '../assets/save-cement.webp';
import smoothPutty from '../assets/smooth-putty.webp';
import pecoExtreme from '../assets/peco-extreme.webp';
import potLifeIcon90 from '../assets/time-90-min.webp';
import potLifeIcon30 from '../assets/time-30-min.webp';
import thinkness from '../assets/thinkness.webp';
import epoxyAdmixure from '../assets/grout-admixure.webp';
import strength from '../assets/strength.webp';
import smoothfinish from '../assets/smooth-finish.webp';
import availablemorecolors from '../assets/available-more-colors.webp';
import easyusecleaning from '../assets/easy-use-cleaning.webp';
import weatherfinish from '../assets/weather-finish.webp';
import stainproof from '../assets/stain-proof.webp';
import noncracking from '../assets/non-cracking.webp';
import chemicalresistance from '../assets/chemical-resistance.webp';
import waterstain from '../assets/water-stain.webp';
import clockicon from '../assets/clock-icon.webp';
import lwImage from '../assets/lw+.webp';
import SbrImage from '../assets/SBR.webp';

const products = {
    pecogrip: {
        name: 'Peco Grip',
        title: 'TILE ADHESIVE',
        subtitle: 'Peco Grip',
        type: 'Type 1T :- C1TE',
        description:
            'PecoGrip is a polymer modified grey cement-based adhesive for fixing of ceramic tiles on internal floor and walls. Its usage extends to Ceramic, fully vitrified, Terracotta, bricks & Porous Stones/Tiles as well. It is water resistant and does not allow cracking of tiles.',
        image: pecogripImage,
        features: [
            { icon: 'indoor', label: 'INDOOR USAGE' },
            { icon: 'water', label: 'WATER MIXING', sublabel: '4-5 Ltr PER BAG' },
            { icon: 'clock', label: 'SET TIME' },
            { icon: 'color', label: 'COLOUR', sublabel: 'GREY', isColor: true },
            { icon: 'potLifeIcon90', label: 'POTLIFE' },
            { icon: 'default', label: 'ADHESIVE', sublabel: 'TYPE 1T' },
        ],
        standard: 'CONFORMS TO IS 15477-2004 : TYPE-1 T',
        technicalData: [
            { label: 'Coverage', value: 'Approx 45-55 sq. ft per 20kg bag' },
            { label: 'Tensile Adhesion<br />Annex A (Clause 5.1)', value: '0.75 - 0.80 N/mm²' },
            { label: 'Shear Adhesion<br />Annex B (Clause 5.2)', value: '1.1 - 1.2 N/mm²' },
            { label: 'Slip Resistance<br />Annex E (Clause 5.5)', value: '0.40-0.45 mm' },
            { label: 'Minimum Bed<br />Thickness required', value: '3 mm using 6MM X 6MM Notched trowel' },
        ],
        coverageNote: '*Actual Coverage depends on substrate condition & method of application',
        packSize: '20',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    pecoprime: {
        name: 'PecoPrime',
        title: 'TILE ADHESIVE',
        subtitle: 'PecoPrime',
        type: 'Type 2T :- C2TE',
        description:
            'PecoPrime is a polymer modified cement-based adhesive for fixing of Ceramic, fully vitrified, Terracotta, bricks, Glass Mosaic Tiles, terrazzo & Porous Stones as well. Its application extends to interior floors/walls & exterior floor. It is water resistant and does not allow cracking of tiles.',
        image: pecoPrime,
        features: [
            { icon: 'indoor', label: 'INDOOR USAGE' },
            { icon: 'water', label: 'WATER MIXING', sublabel: '4-5 Ltr PER BAG' },
            { icon: 'clock', label: 'SET TIME' },
            { icon: 'color', label: 'COLOUR', sublabel: 'GREY', isColor: true },
            { icon: 'potLifeIcon90', label: 'POTLIFE' },
            { icon: 'default', label: 'ADHESIVE', sublabel: 'TYPE 2T' },
        ],
        standard: 'CONFORMS TO IS 15477-2004 : TYPE-2 T',
        technicalData: [
            { label: 'Coverage', value: 'Approx 45-55 sq. ft per 20kg bag' },
            { label: 'Tensile Adhesion<br />Annex A (Clause 5.1)', value: 'Dry Condition: 1.25 - 1.35 N/mm²<br />Wet Condition: 1.15 - 1.25 N/mm²' },
            { label: 'Shear Adhesion<br />Annex B (Clause 5.2)', value: 'Dry Condition: 2.0 - 2.10 N/mm²<br />Wet Condition: 1.45 - 1.55 N/mm²<br />Heat Condition: 1.34 - 1.44 N/mm²' },
            { label: 'Slip Resistance<br />Annex E (Clause 5.5)', value: '0.30-0.45 mm' },
            { label: 'Minimum Bed<br />Thickness required', value: '3 mm using 6MM X 6MM Notched trowel' },
        ],
        coverageNote: '*Actual Coverage depends on substrate condition & method of application',
        packSize: '20',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    pecobond: {
        name: 'PecoBond',
        title: 'TILE ADHESIVE',
        subtitle: 'PecoBond',
        type: 'Type 3TS1 :- C2TES1',
        description:
            'PecoBond adhesive is designed for all internal & external floor & wall tiling, including ceramic, porcelain, & natural stone. It\'s ideal for wet areas (pools, saunas). At 27° C, it has a 2-hour pot life & allows heavy traffic in 16-24 hours. Coverage is about 45-55 sq.ft. per 20kg pack using a 6mm×6mm notched trowel for a 3mm bed.',
        image: pecobondImage,
        features: [
            { icon: 'indoor', label: 'INDOOR USAGE' },
            { icon: 'water', label: 'WATER MIXING', sublabel: '4-5 Ltr PER BAG' },
            { icon: 'clock', label: 'SET TIME' },
            { icon: 'color', label: 'COLOUR', sublabel: 'GREY', isColor: true },
            { icon: 'potLifeIcon90', label: 'POTLIFE' },
            { icon: 'default', label: 'ADHESIVE', sublabel: 'TYPE 3T' },
        ],
        standard: 'CONFORMS TO IS 15477-2004 : TYPE-3 T',
        technicalData: [
            { label: 'Coverage', value: 'Approx 45-55 sq. ft per 20kg bag' },
            { label: 'Tensile Adhesion<br />Annex A (Clause 5.1)', value: 'Dry Condition: 1.50-1.65 N/mm²<br />Wet Condition: 1.10-1.20 N/mm²' },
            { label: 'Shear Adhesion<br />Annex B (Clause 5.2)', value: 'Dry Condition: 1.45-1.55 N/mm²<br />Wet Condition: 1.15-1.25 N/mm²<br />Heat Condition: 1.15-1.25 N/mm²' },
            { label: 'Slip Resistance<br />Annex E (Clause 5.5)', value: '0.25-0.35 mm' },
            { label: 'Transverse Deformation', value: '2.70-2.80 mm' },
        ],
        coverageNote: '*Actual Coverage depends on substrate condition & method of application',
        packSize: '20',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    pecoflex: {
        name: 'PecoFlex',
        title: 'TILE ADHESIVE',
        subtitle: 'PecoFlex',
        type: 'Type 4TS1 :- C2TES1',
        description:
            'PecoFlex is a highly polymer modified cement-based adhesive for fixing of large format of all tiles, plaster board, concrete surfaces and stones. Its application can be extended to highly diversified uses, material and surfaces. Excellent for elevation purposes and heavy exterior requirement.',
        image: pecoflexImage,
        features: [
            { icon: 'indoor', label: 'DRY & WET INDOOR / OUTDOOR' },
            { icon: 'water', label: 'WATER MIXING', sublabel: '4-5 Ltr PER BAG' },
            { icon: 'clock', label: 'SET TIME' },
            { icon: 'color', label: 'COLOUR', sublabel: 'GREY', isColor: true },
            { icon: 'potLifeIcon90', label: 'POTLIFE' },
            { icon: 'default', label: 'ADHESIVE', sublabel: 'TYPE 4T S1' },
        ],
        standard: 'CONFORMS TO IS 15477-2004 : TYPE-4 T S1',
        technicalData: [
            { label: 'Coverage', value: 'Approx 45-55 sq. ft per 20kg bag' },
            { label: 'Tensile Adhesion<br />Annex A (Clause 5.1)', value: 'Dry Condition: 2.5 - 2.8 N/mm²<br />Wet Condition: 2.6 - 2.7 N/mm²' },
            { label: 'Shear Adhesion<br />Annex B (Clause 5.2)', value: 'Dry Condition: 2.5 - 2.7 N/mm²<br />Wet Condition: 1.9 - 2.1 N/mm²<br />Heat Condition: 1.9 - 2.1 N/mm²' },
            { label: 'Slip Resistance<br />Annex E (Clause 5.5)', value: '0.25 - 0.30 mm' },
            { label: 'Transverse Deformation', value: '3.0 - 4.0 mm' },
            { label: 'Minimum Bed<br />Thickness required', value: '3 mm using 6MM X 6MM Notched trowel' },
        ],
        coverageNote: '*Actual Coverage depends on substrate condition & method of application',
        packSize: '20',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    pecoextreme: {
        name: 'PecoExtreme',
        title: 'TILE ADHESIVE',
        subtitle: 'PecoExtreme',
        type: `Type V :- 'T' S2`,
        description:
            'PecoExtreme is a two-component Epoxy PU tile adhesive designed for installing all types of tiles & stones (including glass & metal) on both interior and exterior floors and walls. It is highly versatile, suitable for deformable, absorbent, & non-absorbent substrates like metal, wood, rubber, PVC, & cement-based surfaces.',
        image: pecoExtreme,
        features: [
            { icon: 'indoor', label: 'INDOOR USAGE' },
            { icon: 'water', label: 'WATER MIXING', sublabel: '4-5 Ltr PER BAG' },
            { icon: 'color', label: 'COLOUR', sublabel: 'GREY', isColor: true },
            { icon: 'clock', label: 'SET TIME' },
            { icon: 'potLifeIcon90', label: 'POTLIFE' },
            { icon: 'default', label: 'ADHESIVE', sublabel: 'TYPE 5T' },
        ],
        standard: 'CONFORMS TO IS 15477-2004 : TYPE-5 T',
        technicalData: [
            { label: 'Coverage', value: 'Approx 45-55 sq. ft per 20kg bag' },
            { label: 'Tensile Adhesion<br />Annex A (Clause 5.1)', value: 'Dry Condition: 3.40-3.90 N/mm²' },
            { label: 'Shear Adhesion<br />Annex B (Clause 5.2)', value: 'Dry Condition: 6.40-7.50 N/mm²<br />Heat Condition: 3.40-4.50 N/mm²' },
            { label: 'Transverse Deformation', value: '8.0 - 10.0 mm' },
            { label: 'Minimum Bed<br />Thickness required', value: '3 mm using 6MM X 6MM Notched trowel' },
        ],
        coverageNote: '*Actual Coverage depends on substrate condition & method of application',
        packSize: '4',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    'polymer-tile-grout': {
        name: 'Polymer Tile Grout',
        title: 'GROUT & SEALANTS',
        subtitle: 'Polymer Grout',
        type: 'Polymer Modified Cementitious',
        description:
            'This polymer-modified cementitious tile grout is a water-resistant, non-cracking, and non-shrink filler for grouting various tiles like glazed, vitrified, floor, and industrial types. It creates hard-wearing, non-dusting joints that firmly hold tiles, usable for joint widths of 1 mm to 3 mm max. For improved results, you can mix in a tile admix. It\'s available in both sanded and unsanded forms.',
        image: polumerTileGrout,
        features: [
            { icon: 'indoor', label: 'INDOOR/ OUTDOOR USAGE' },
            { icon: 'default', label: 'CAN FILL THE JOINTS', sublabel: '1mm-3mm' },
            { icon: 'smoothfinish', label: 'SMOOTH FINISH' },
            { icon: 'easyusecleaning', label: 'EASY TO APPLY & CLEAN' },
            { icon: 'availablemorecolors', label: 'AVAILABLE IN MORE THAN 15 COLORS' },
            { icon: 'weatherfinish', label: 'WEATHER FINISH' },
        ],
        standard: 'ISO 13007-4 & EN 12808',
        technicalData: [
            { label: 'Abrasion resistance<br />(ISO 13007-4; Clause 4.4; EN 12808-2)', value: 'Typical: 1300-1600 mm³' },
            { label: 'Flexural strength under standard condition<br />(ISO 13007-4: Clause 4.1.3; EN 12808-3)', value: 'Typical: 3.0-3.5 N/mm²' },
            { label: 'Compressive Strength under standard Condition<br />(ISO 13007-4: Clause 4.1.2; EN 12808-3)', value: 'Typical: 20-22 N/mm²' },
            { label: 'Shrinkage<br />(ISO 13007-4: Clause 4.3; EN12808-4)', value: 'Typical: 2.22 mm/m' },
            { label: 'Water Absorption after 30 Minutes<br />(ISO 13007-4; Clause 4.2; EN 12808-5)', value: 'Typical: 2.5-3.0 g' },
        ],
        coverageNote: '',
        packSize: '1',
        shelfLife: '24 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed pack in a dry and closed place.',
    },
    'epoxy-grout-bucket': {
        name: '3K Epoxy Tile Grout',
        title: 'GROUT & SEALANTS',
        subtitle: '3K Epoxy Grout',
        type: '3-Component Epoxy Resin',
        description:
            'This is a 3-component epoxy resin grout that is hygienic, stain-free, water- and shock-resistant, and provides good bond strength for floor and wall joints. It works with all ceramic, glass, and stone tiles. It is highly recommended for wet and commercial areas like kitchens, schools, restrooms, and swimming pools.',
        image: epoxyGroutBucket,
        features: [
            { icon: 'stainproof', label: 'STAIN PROOF & EASY TO CLEAN' },
            { icon: 'chemicalresistance', label: 'NON-CRACKING & POWDERING' },
            { icon: 'clock', label: 'CURING TIME' },
            { icon: 'potLifeIcon30', label: 'POT LIFE' },
            { icon: 'chemicalresistance', label: 'CHEMICAL RESISTANCE' },
            { icon: 'availablemorecolors', label: 'AVAILABLE IN VARIOUS SHADES' },
        ],
        standard: 'ISO 13007-4 & EN 12808',
        technicalData: [
            { label: 'Abrasion resistance<br />(ISO 13007-4; Clause 4.4; EN 12808-2)', value: 'Pass (≤ 250 mm³)' },
            { label: 'Flexural strength under standard condition<br />(ISO 13007-4: Clause 4.1.3; EN 12808-3)', value: 'Typical: 38-40 N/mm²' },
            { label: 'Compressive Strength under standard Condition<br />(ISO 13007-4: Clause 4.1.2; EN 12808-3)', value: 'Typical: 55-57 N/mm²' },
            { label: 'Shrinkage<br />(ISO 13007-4: Clause 4.3; EN 12808-4)', value: 'Typical: 0.6-0.8 mm/m' },
            { label: 'Water Absorption after 240 Minutes<br />(ISO 13007-4; Clause 4.2; EN 12808-5)', value: 'Typical: 0.015-0.040 g' },
        ],
        coverageNote: '*Refer consumption chart and shade options given in application guide at page no. 14',
        packSize: '5',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    'grout-admix': {
        name: 'Grout Admixture',
        title: 'GROUT & SEALANTS',
        subtitle: 'Grout Admixture',
        type: 'Milky White Tile Grout Admixture',
        description:
            'Grout Admixture is a milky white tile grout admixture for grout admixture used in place of water. It enhances the strength, durability and performance of tile grout mix. The mix of Grout Admixture cementitious on wall & floor & all admix of tiles & grout admix is ideal for fillings joints under glazed, vitrified, glass mosaics, porcelain, terracotta and natural stones like ceramic, clay, large format, glazed, vitrified, glass on dry & wet and under wet joints.',
        image: epoxyAdmixure, // Replace with actual image import
        features: [
            { icon: 'indoor', label: 'DRY & WET INDOOR/OUTDOOR' },
            { icon: 'waterstain', label: 'WATER & STAIN RESISTANCE' },
            { label: 'COLOUR', sublabel: 'MILKY WHITE', isColor: true },
            { icon: 'default', label: 'DOSAGE', sublabel: '200-400ml FOR 1KG' },
            { icon: 'strength', label: 'INCREASE STRENGTH' },
            { icon: 'noncracking', label: 'NON SHRINKAGE & CRACKING' },
        ],
        standard: '', // Not specified in provided details
        technicalData: [
            { label: 'Joint width', value: '1-6 mm' },
            { label: 'Compression strength', value: '>215 N/mm²' },
            { label: 'Flexural strength', value: '>2.5 N/mm²' },
            { label: 'Shrinkage, 24 hrs', value: '<3 mm/m' },
            { label: 'Water Absorption, 24 hrs', value: '<5 g' },
        ],
        coverageNote: '',
        packSize: '200-400 ml',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in original sealed sacks in a dry and closed place.',
    },
    'grout-admixture': {
        name: 'Grout Admixture',
        title: 'GROUT & SEALANTS',
        subtitle: 'Grout Admixture',
        type: 'Milky White Tile Grout Admix',
        description:
            'Grout Admixture is a milky white tile grout admix for Grout Admixture Tile Grout used in place of water to enhance the strength, durability, and performance of the tile grout. The Mix of Grout Admixture Cementitious Tile Grout & Grout Admixture Tile Grout Admix is ideal for fillings joints under wet and dry conditions on wall & floor for all kinds of tiles & stones like Ceramic, Clay, Large Format, Glazed, Vitrified, Glass Mosaics, Porcelain, Terracotta and Natural Stones.',
        image: productImage, // Placeholder; replace with actual
        features: [
            { icon: 'indoor', label: 'DRY & WET INDOOR/ OUTDOOR' },
            { icon: 'waterstain', label: 'WATER & STAIN RESISTANCE' },
            { icon: 'color', label: 'COLOUR', sublabel: 'MILKY WHITE', isColor: true },
            { icon: 'default', label: 'DOSAGE', sublabel: '200-400ml for 1KG GROUT' },
            { icon: 'default', label: 'INCREASE STRENGTH' },
            { icon: 'default', label: 'NON SHRINKAGE & CRACKING' },
        ],
        standard: 'Cementitious Grout Standard',
        technicalData: [
            { label: 'JOINT WIDTH', value: '1-6 mm' },
            { label: 'COMPRESSION STRENGTH', value: '>215 N/mm²' },
            { label: 'FLEXURAL STRENGTH', value: '> 2.5 N/mm²' },
            { label: 'SHRINKAGE, 24 HRS', value: '< 3 mm/m' },
            { label: 'WATER ABSORPTION, 24 HRS', value: '< 5 gm' },
        ],
        coverageNote: '',
        packSize: '',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    'pecoshield-2k': {
        name: 'PecoShield 2K',
        title: 'WATER PROOFING',
        subtitle: 'PecoShield 2K',
        type: 'Two Component Elastomeric Waterproof & Protective Coating',
        description: 'Pecoshield Two component polymer modified flexible and elastic cementitious waterproof cum anti-carbonation coating to be applied on sound substrates for extremely tough & durable waterproof render. Best suited For all structures to be waterproofed & protected against ingress of moisture like',
        applications: [
            'Basement',
            'Water Tanks',
            'Swimming Pools',
            'Retaining Walls',
            'Bridge Walls',
            'Tunnels',
            'Lift Shafts',
            'Sewage Tanks',
            'Reservoirs',
            'Dams',
            'Dock Gates'
        ],
        image: productImage,
        features: [
        ],
        standard: 'Cementitious Waterproof Standard',
        technicalData: [],
        coverageNote: '',
        packSize: '15',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    'lw+': {
        name: 'LW+ Integral Waterproofing',
        title: 'WATER PROOFING',
        subtitle: 'LW+ Integral Waterproofing',
        type: 'Integral Waterproofing Liquid Admixture',
        description:
            'Integral Waterproofing Liquid Admixture for concrete and mortar confirming to IS 2645:2003, IS 4031:1988, IS 6925:1973. For waterproofing of concrete and mortar used in RCC beams, basements, roof slabs and screeds. For water tanks & water retaining structures, external plastering, bathrooms and balconies, sumps and drains. In precast concrete manufacturing. Dosage is 200ml for 50Kg cement bag.',
        image: lwImage,
        features: [
            { icon: 'WhiteCement', label: 'IMPROVES WORKABILITY WITH CEMENT' },
            { icon: 'Water', label: 'SAVE WATER USAGE' },
            { icon: 'SaveCement', label: 'SAVE CEMENT USAGE' }
        ],
        standard: 'IS 2645:2003, IS 4031:1988, IS 6925:1973',
        technicalData: [],
        coverageNote: '',
        packSize: '10',
        shelfLife: '',
        shelfLifeNote: ''
    },
    'sbr-latex-bond': {
        name: 'SBR Latex Bond',
        title: 'WATER PROOFING',
        subtitle: 'SBR Latex Bond',
        type: 'Latex Bond',
        description:
            'Latex Bond-A milky white latex based on modified styrene butadiene (SBR) co-polymer emulsion for waterproofing & bonding in many civil engineering applications. SBR Latex Type II, EN 12090. Waterproofing & Repair Polymer confirming to ASTM C 1059 Type II, EN 12090. For concrete repairs in combination with cement: Spalled concrete of floors, columns, beams, slabs, parapets etc. For waterproofing: As a strong primer & additive in the mortar - small roof terraces, sunken portions of toilets bathrooms, lift & add balconies. As a bond coat: For multi layer plaster, lift pits & bonding agent & waterproof barrier, bonding of new concrete to old concrete, masonry stone work & plastering.',
        image: SbrImage,
        features: [
        ],
        standard: 'ASTM C 1059 Type II, EN 12090',
        technicalData: [],
        coverageNote: '',
        packSize: '',
        shelfLife: '',
        shelfLifeNote: ''
    },
    'lw-waterproofing': {
        name: 'LW+ Integral Waterproofing',
        title: 'WATER PROOFING',
        subtitle: 'LW+ Integral Waterproofing',
        type: 'Integral Waterproofing Liquid Admixture',
        description:
            'Integral Waterproofing Liquid Admixture for concrete and mortar confirming to IS 2645:2003, IS 4031:1988, IS 6925:1973. For waterproofing of concrete and mortar used in RCC beams, basements, roof slabs and screeds. For water tanks & water retaining structures, external plastering, bathrooms and balconies, sumps and drains. In precast concrete manufacturing. Dosage is 200ml for 50Kg cement bag.',
        image: productImage,
        features: [
            { icon: 'indoor', label: 'INDOOR / OUTDOOR USAGE' },
            { icon: 'default', label: 'IMPROVES WORKABILITY WITH CEMENT' },
            { icon: 'default', label: 'SAVE WATER USAGE' },
            { icon: 'default', label: 'SAVE CEMENT USAGE' },
            { icon: 'default', label: 'DOSAGE: 200ml / 50kg Cement' },
        ],
        standard: 'IS 2645:2003, IS 4031:1988, IS 6925:1973',
        technicalData: [],
        coverageNote: '',
        packSize: '',
        shelfLife: '12 months from the date of manufacturing.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    'block-jointing-mortar': {
        name: 'Peco Block Fix',
        title: 'BLOCK JOINTING MORTAR',
        subtitle: 'Peco Block Fix',
        type: 'Polymer Modified Adhesive for Masonry',
        description:
            'Polymer modified adhesive for masonry building applications, optimum for the adhesion of AAC blocks heaving high shear bond strength. Peco Block Fix replaces traditional method of 20-25mm thickness with 3 - 6mm thickness of Reliant Block Fix. High shear bond strength: Ensuring secure and reliable adhesion of AAC blocks, providing structural stability to your building. Improved efficiency: With its reduced thickness requirement, it streamlines the construction process, making it more efficient and cost-effective.',
        image: productImage,
        features: [
        ],
        standard: 'Conforms to ASTM C: 1660-10',
        technicalData: [
            { label: 'Coverage', value: 'Approx 70-80 sq.ft./40kg at 2-3mm bed thickness' },
        ],
        coverageNote: '',
        packSize: '40',
        shelfLife: '12 months.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    },
    'smooth-putty': {
        name: 'Smooth Putty',
        title: 'WALL PUTTY',
        subtitle: 'Smooth Putty',
        type: 'Polymer Modified White Cement Based',
        description:
            'Polymer modified white cement based water resistant fine wall putty for concrete/mortar walls and ceilings. It has superior adhesive strength and durability. It does not require water curing. Benefits: Suitable for all kinds of paint & provides smooth & durable surface. Can be used as a filler/leveller in the paint system.',
        image: smoothPutty,
        features: [
        ],
        standard: 'Conforms to ASTM C: 1660-10',
        technicalData: [
            { label: 'Coverage', value: 'Approx 20-25 sq.ft./kg/mm' },
        ],
        coverageNote: '',
        packSize: '20',
        shelfLife: '12 months.',
        shelfLifeNote: 'Stored in a original sealed sacks in a dry and closed place.',
    }
};

const IndoorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#0184a0" stroke="none">
            <path d="M2360 5084 c-73 -34 -102 -62 -1158 -1117 -596 -595 -1098 -1105 -1117 -1133 -76 -113 -98 -285 -55 -415 65 -193 219 -307 440 -325 l79 -7 3 -816 c3 -801 4 -817 24 -871 73 -192 187 -307 363 -367 65 -22 75 -22 551 -23 467 0 486 1 518 20 18 11 41 34 52 52 19 32 20 52 20 668 0 433 4 648 11 675 17 60 64 121 117 152 l47 28 316 0 316 0 49 -30 c55 -34 107 -111 118 -172 3 -21 6 -318 6 -661 0 -675 -2 -649 55 -702 l27 -25 481 -3 c322 -2 499 1 534 8 138 29 298 151 361 275 70 140 66 83 70 981 l3 812 82 7 c198 17 333 105 413 270 34 68 34 71 34 205 0 135 0 136 -36 210 -34 73 -61 101 -1132 1172 -1071 1071 -1099 1098 -1172 1132 -74 36 -75 36 -210 36 -135 0 -136 0 -210 -36z m277 -274 c36 -14 2148 -2124 2168 -2166 35 -74 9 -168 -58 -212 -39 -26 -48 -27 -207 -32 -180 -5 -201 -11 -237 -67 -17 -25 -18 -89 -23 -928 -5 -823 -6 -903 -22 -936 -27 -57 -66 -98 -122 -127 l-51 -27 -357 -3 -357 -4 -3 579 c-3 566 -4 579 -26 643 -59 173 -174 295 -342 359 -64 25 -70 25 -402 29 -283 3 -347 1 -400 -12 -207 -53 -370 -220 -414 -425 -11 -52 -14 -183 -14 -619 l0 -554 -357 4 -358 3 -55 30 c-67 37 -115 98 -129 165 -7 35 -11 329 -11 918 0 842 -1 868 -20 899 -37 61 -57 67 -240 73 -159 5 -168 6 -207 32 -67 44 -93 138 -58 212 19 39 2131 2152 2165 2165 34 13 102 13 137 1z" />
        </g>
    </svg>
);

const Strength = () => (
    <img src={strength} alt="strength" />
);

const Thinkness = () => (
    <img src={thinkness} alt="Thinkness" />
);

const Accblocks = () => (
    <img src={accblocks} alt="Accblocks" />
);

const Smoothfinish = () => (
    <img src={smoothfinish} alt="smoothfinish" />
);

const AvailableMoreColors = () => (
    <img src={availablemorecolors} alt="availablemorecolors" />
);

const EasyUseCleaning = () => (
    <img src={easyusecleaning} alt="easyusecleaning" />
);

const WeatherFinish = () => (
    <img src={weatherfinish} alt="weatherfinish" />
);

const StainProof = () => (
    <img src={stainproof} alt="stainproof" />
);

const NonCracking = () => (
    <img src={noncracking} alt="noncracking" />
);

const ChemicalResistance = () => (
    <img src={chemicalresistance} alt="chemicalresistance" />
);

const PotLifeIcon30 = () => (
    <img src={potLifeIcon30} alt="potLifeIcon30" />
);

const PotLifeIcon90 = () => (
    <img src={potLifeIcon90} alt="potLifeIcon90" />
);

const ClockIcon = () => (
    <img src={clockicon} alt="clock" />
);

const WaterStain = () => (
    <img src={waterstain} alt="waterstain" />
);

const WhiteCement = () => (
    <img src={whiteCement} alt="whiteCement" />
);

const WaterIcon = () => (
    <img src={Water} alt="water" />
);

const SaveCementIcon = () => (
    <img src={SaveCement} alt="saveCement" />
);

const GreyColorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3423 836" fill="none">
        <path d="M1907.3 127.039L1907.69 127.961L1874.2 141.957L1845.7 154.458L1815.22 169.448L1784.73 184.938L1784.74 184.938L1752.74 202.433L1723.25 219.434L1723.24 219.433L1688.75 239.927L1646.75 265.428L1605.77 292.915L1605.77 292.916L1559.27 323.916L1559.27 323.918L1518.77 350.418L1518.75 350.43L1474.25 376.93L1474.24 376.938L1474.22 376.946L1436.72 395.946L1409.22 409.945L1409.2 409.958L1409.17 409.968L1377.17 421.968L1377.17 421.97L1349.67 431.97L1349.63 431.982L1349.59 431.99L1317.59 438.49L1317.57 438.495L1317.54 438.498L1275.54 442.498L1275.52 442.5H1244.44L1244.38 442.487L1197.88 431.987L1197.83 431.977L1197.79 431.955L1154.79 412.455L1154.75 412.438L1154.72 412.415L1124.22 391.915L1124.18 391.913L1124.15 391.864L1099.15 368.364L1099.14 368.351L1099.12 368.336L1080.12 347.336L1080.11 347.32L1080.1 347.305L1052.1 310.805L1052.09 310.791L1052.08 310.776L1027.58 273.776L1027.57 273.77L1027.57 273.763L993.069 217.763L965.09 175.793L937.608 139.817L909.138 107.352L875.678 76.8877L846.216 55.415L818.269 38.9463L787.301 24.9609L748.857 11.4805L718.924 4.99512L675.471 1H635.029L593.06 6.49609L593.059 6.49512L550.603 13.4883L517.635 21.9805L470.658 36.9727L436.697 50.957L401.721 66.4463L369.771 84.917L343.276 102.914L343.275 102.913L316.309 122.889L273.339 159.862L234.373 200.328L212.389 228.309L175.921 280.761L148.927 326.753L121.447 378.713L94.9561 441.694L71.4736 506.646L49.9736 577.146L27.4873 669.09L11.4873 757.09L0.999117 835.5H3417.69H3423L3118 586.5L2829 365L2665 249L2590.5 201L2469 126.5L2400.5 96.5L2320.5 72L2268.5 64.5L2214 59L2148 61.5L2084.5 70.5L2029 83.5L1954 107.5L1907.3 127.039Z" fill="#868686" />
    </svg>
);

const ProductDetail = () => {
    const { slug } = useParams();
    const product = products[slug];

    if (!product) {
        return <div className="product-detail-page">Product not found</div>;
    }

    const renderFeatureIcon = (feature) => {
        switch (feature.icon) {
            case 'indoor':
                return <IndoorIcon />;
            case 'SaveCement':
                return <SaveCementIcon />;
            case 'Water':
                return <WaterIcon />;
            case 'WhiteCement':
                return <WhiteCement />;
            case 'clock':
                return <ClockIcon />;
            case 'potLifeIcon30':
                return <PotLifeIcon30 />;
            case 'potLifeIcon90':
                return <PotLifeIcon90 />;
            case 'color':
                return <GreyColorIcon />;
            case 'thinkness':
                return <Thinkness />;
            case 'waterstain':
                return <WaterStain />;
            case 'noncracking':
                return <NonCracking />;
            case 'chemicalresistance':
                return <ChemicalResistance />;
            case 'stainproof':
                return <StainProof />;
            case 'weatherfinish':
                return <WeatherFinish />;
            case 'easyusecleaning':
                return <EasyUseCleaning />;
            case 'smoothfinish':
                return <Smoothfinish />;
            case 'availablemorecolors':
                return <AvailableMoreColors />;
            case 'strength':
                return <Strength />;
            case 'accblocks':
                return <Accblocks />;
            case 'water':
            default:
                return null;
        }
    };

    return (
        <>
            <div className="product-detail-page">
                <h1 className="product-detail-title f-170 f-m-48 w-800 first-font l-h-1">{product.title}</h1>
                <div className="product-detail-container container">
                    <div className="product-detail-image-section">
                        <img src={product.image} alt={product.name} className="product-detail-image" />
                    </div>

                    <div className="product-detail-info-section">
                        <h2 className="product-detail-subtitle f-110 f-m-48 w-600 l-h-1 white-color second-font">
                            {product.subtitle}{' '}
                            <span className="white-color f-48 f-m-32 w-500 l-h-1 second-font">{product.type}</span>
                        </h2>

                        <p className="product-description f-20 f-m-16 w-400 l-h-1-2 second-font">
                            {product.description}
                        </p>

                        {product.applications && (
                            <ul className="product-applications">
                                {product.applications.map((app, index) => (
                                    <li key={index} className="f-20 f-m-16 w-400 l-h-1-2 second-font">
                                        {app}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {product.features && product.features.length > 0 && (
                            <div className="product-features-grid">
                                {product.features.map((feature, index) => (
                                    <div className="feature-item" key={index}>
                                        <div className="product-icon">
                                            <span className="feature-label f-24 f-m-16 w-600 l-h-1-2 second-font primary-color">{feature.sublabel}</span>
                                            {renderFeatureIcon(feature)}
                                        </div>
                                        <span className="feature-sublabel f-20 f-m-16 w-500 l-h-1-2 second-font white-color">
                                            {feature.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {((product.technicalData && product.technicalData.length > 0) || product.standard) && (
                            <div className="technical-details-section">
                                <div className="technical-header f-20 f-m-16 w-600 l-h-1-2 second-font primary-color">
                                    TECHNICAL DETAILS
                                </div>
                                {product.standard && (
                                    <div className="technical-subheader f-20 f-m-16 w-600 l-h-1-2 second-font white-color">
                                        {product.standard}
                                    </div>
                                )}
                                {product.technicalData && product.technicalData.length > 0 && (
                                    <table className="technical-table">
                                        <tbody>
                                            {product.technicalData.map((row, i) => (
                                                <tr key={i}>
                                                    <td className="f-20 f-m-16 w-500 l-h-1-2 second-font white-color" dangerouslySetInnerHTML={{ __html: row.label }} />
                                                    <td className="f-18 f-m-16 w-400 l-h-1-2 second-font white-color" dangerouslySetInnerHTML={{ __html: row.value }} />
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                                {product.coverageNote && (
                                    <div className="technical-footer f-20 f-m-14 w-500 l-h-1-2 second-font white-color">
                                        {product.coverageNote}
                                    </div>
                                )}
                            </div>
                        )}

                        {product.packSize && (
                            <div className="pack-size f-28 f-m-20 w-400 l-h-1-2 second-font white-color">
                                Pack Size <span className="f-32 f-m-20 w-800 l-h-1-2 second-font primary-color">{product.packSize}</span> kg
                            </div>
                        )}

                        {(product.shelfLife || product.shelfLifeNote) && (
                            <div className="shelf-life">
                                <p className="f-20 f-m-16 w-600 l-h-1-2 second-font white-color" style={{ textAlign: 'center' }}>
                                    Shelf Life
                                </p>
                                <p className="f-20 f-m-16 w-400 l-h-1-2 second-font white-color" style={{ textAlign: 'center', opacity: 0.8 }}>
                                    {product.shelfLife}
                                </p>
                                <p className="f-20 f-m-16 w-400 l-h-1-2 second-font white-color" style={{ textAlign: 'center', opacity: 0.8 }}>
                                    {product.shelfLifeNote}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ProductList />
        </>
    );
};

export default ProductDetail;