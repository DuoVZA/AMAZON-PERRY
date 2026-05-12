import './ProductListFiltersAside.css';

const brands = [
  {name:"PUMIEY"},
  {name:"Abardsion"},
  {name:"Trendy Queen"},
  {name:"Roselux"},
  {name:"Darong"},
  {name:"KevaMolly"},
  {name:"AUTOMET"},
  {name:"PUMA"},
  {name:"H&M"}
]

const fabricTypes = [
  {name:"Polyamide"},
  {name:"Elastane"},
  {name:"Cotton"},
  {name:"Silk"},
  {name:"Nylon"},
  {name:"Chiffon"},
  {name:"Satin"},
  {name:"Sateen"},
  {name:"Stockinet"}
]

export function Filter(props){
  return <div id={props.filter} className={props.style}>
      <h2>{props.filter}</h2>
      <div className="search-container">
        <button className="search-btn"></button>
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
        />
      </div>
      <ul>
        {props.options.map(elem => <li><label for={elem.name}><input type='checkbox' id={elem.name}></input> {elem.name}</label></li>)}
      </ul>
    </div>
}

export function ProductListFiltersAside(props){
  return <div className="ProductListFiltersAside">
    <Filter filter="Brand" style="list" options={brands}/>
    <Filter filter="Fabric type" style="list" options={fabricTypes}/>
  </div>
}

