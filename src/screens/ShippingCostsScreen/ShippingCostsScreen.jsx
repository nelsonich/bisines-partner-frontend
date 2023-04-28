import React from 'react';
import MainLayout from '~layouts/MainLayout';
import styles from './ShippingCostsScreen.module.scss';
import ShippingCostsTable from './ShippingCostsTable';

function ShippingCostsScreen({ shippingCities }) {
  return (
    <MainLayout>
      <div className="container">
        <div className={styles['big-box-shipping']}>
          <div className={styles['title-costs']}>
            <h4>ԱՌԱՔՄԱՆ ԱՐԺԵՔՆԵՐ</h4>
            <p>
              Երևան քաղաքում մեկ սրահից գնված ապրանքի առաքումն իրականացվում է
              սկսած 1,000 դրամից, մարզերում՝ ըստ գնացուցակի: Յուրաքանչյուր
              երկրորդ սրահից սկսած առաքման հիմնական արժեքին (Երևանի դեպքում
              սկսած 1,000 դրամից) ավելանում է 700 դրամ, երրորդ սրահից պատվերի
              դեպքում ևս 700 դրամ և այդպես շարունակ։
            </p>
            <p>
              Ուշադրություն․ որոշ կոմպոզիցիաներ և նվերներ պետք է պատվիրել մի
              քանի օր շուտ։ Առաքման ուշացումը պայմանավորված ժամից հնարավոր է
              միայն անկանխատեսելի դեպքերում/խցանում, վթար և այլն/։ Այդ դեպքում
              գնորդը/ստացողը անպայման տեղեկացվում է առաքման ժամկետի փոփոխության
              մասին։
            </p>
            <p>
              Եթե Ձեր պահանջով առաքումը կատարվել է առանց նախապես զանգահարելու,
              հասցեատիրոջ բացակայության դեպքում առաքիչն իրավասու է հանձնել նվերը
              երրորդ անձին (հարևանին, աշխատակցին, դռնապանին, ադմինիստրատորին և
              այլն) այն հասցեատիրոջը փոխանցելու համար:
            </p>
            <p>
              4u.am–ը պատասխանատվություն չի կրում այն պատվերների համար, որոնք
              հնարավոր չի եղել իրականացնել հասցեի անճշտության կամ ստացողի՝
              հեռախոսազանգերին չպատասխանելու պատճառով։
            </p>
            <p>
              Տոնական օրերին (Փետրվարի 14, մարտի 8, ապրիլի 7, սեպտեմբերի 1 և
              այլն) առաքումն իրականացնելու համար պատվերը պետք է ձևակերպել
              առնվազն մեկ օր շուտ։
            </p>
            <p>
              Հարգելի հաճախորդներ, առաքումը պատշաճ և ժամանակին իրականացնելու
              համար խնդրում ենք ուշադիր լրացնել բոլոր դաշտերը, հարցերի դեպքում
              գրել օնլայն խորհրդատուին կամ զանգահարել։
            </p>
          </div>

          <div>
            <ShippingCostsTable shippingCities={shippingCities} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default ShippingCostsScreen;