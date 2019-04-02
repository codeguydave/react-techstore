import React, { Component } from 'react'
import { linkData } from "./linkData";

// CONTEXT OBJECT
const ProductContext = React.createContext();
//PROVIDER
//CONSUMER

class ProductProvider extends Component{
 state={
     sidebarOpen:false,
     cartOpen:false,
     cartItems:15,
     links: linkData,
     cart: []
 };  
 //handle sidebar 
 handleSidebar = () => {
     this.setState({sidebarOpen:!this.state.sidebarOpen})
 };
 //hande cart
 handleCart = () => {
     this.setState({cartOpen:!this.state.sidebarOpen})
 };
 //close cart
closeCart = () => {
    this.setState({cartOpen: true})
};
//open cart
openCart = () => {
    this.setState({cartOpen: true})
}

    render(){
        return (
        <ProductContext.Provider value={{
            ...this.state,
            handleCart: this.handleCart,
            handleSidebar: this.handleSidebar,
            closeCart: this.closeCart,
            openCart: this.openCart }}>
        {this.props.children}
        
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};