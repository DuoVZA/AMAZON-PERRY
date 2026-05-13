import './CategorySlider.css';
import { useState } from 'react';
import React from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard';

const categoriesFirst = [
  {img:'./images/categories/Tools-for-leather-products-favorable-prices.png', name:'Tools for leather products: favorable prices'},
  {img:'./images/categories/Electronics-with-discount-buy-time.png', name:'Electronics with discount: buy time'},
  {img:'./images/categories/A-set-of-garden-tools-bargain-price.png', name:'A set of garden tools: bargain price'},
  {img:'./images/categories/Summer-care-cosmetics-freshness-and-protection.png', name:'Summer care cosmetics: freshness and protection'},
  {img:'./images/categories/Baby-clothes-up-to-25-comfort-and-style.png', name:'Baby clothes up to $25 comfort and style'},
  {img:'./images/categories/Stylish-womens-clothing-new-season.png', name:'Stylish women’s clothing: new season'},
  {img:'./images/categories/Household-chemicals.png', name:'Household chemicals up to $15: quality and Savings'},
  {img:'./images/categories/Swimsuits-competitive-prices.png', name:'Swimsuits: competitive prices'},
  {img:'./images/categories/Sports-equipment.png', name:'Sports equipment bestseller: hit sales'},
  {img:'./images/categories/Fashionable-childrens-clothes.png', name:'Fashionable children’s clothes for girls: vivid images'},
  {img:'./images/categories/Musical-instruments.png', name:'Musical instruments: sale, super prices'},
  {img:'./images/categories/Fashion-sunglasses.png', name:'Fashion sunglasses: this month’s best sellers!'}
];

const categoriesSecond = [
  {img:'./images/categories/Household-chemicals.png', name:'Household chemicals up to $15: quality and Savings'},
  {img:'./images/categories/Swimsuits-competitive-prices.png', name:'Swimsuits: competitive prices'},
  {img:'./images/categories/Sports-equipment.png', name:'Sports equipment bestseller: hit sales'},
  {img:'./images/categories/Fashionable-childrens-clothes.png', name:'Fashionable children’s clothes for girls: vivid images'},
  {img:'./images/categories/Musical-instruments.png', name:'Musical instruments: sale, super prices'},
  {img:'./images/categories/Fashion-sunglasses.png', name:'Fashion sunglasses: this month’s best sellers!'},
  {img:'./images/categories/Tools-for-leather-products-favorable-prices.png', name:'Tools for leather products: favorable prices'},
  {img:'./images/categories/Electronics-with-discount-buy-time.png', name:'Electronics with discount: buy time'},
  {img:'./images/categories/A-set-of-garden-tools-bargain-price.png', name:'A set of garden tools: bargain price'},
  {img:'./images/categories/Summer-care-cosmetics-freshness-and-protection.png', name:'Summer care cosmetics: freshness and protection'},
  {img:'./images/categories/Baby-clothes-up-to-25-comfort-and-style.png', name:'Baby clothes up to $25 comfort and style'},
  {img:'./images/categories/Stylish-womens-clothing-new-season.png', name:'Stylish women’s clothing: new season'}
];

export function CategorySlider(props) {
  let categories = props.categories=='first' ? categoriesFirst:categoriesSecond;
  return (
    <div id='container'>
      {categories.map(elem => <CategoryCard item={elem} ></CategoryCard>)}
    </div>
  );
}
