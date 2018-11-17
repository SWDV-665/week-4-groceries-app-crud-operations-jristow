import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },
    {
      name: "Coffee",
      quantity: 1
    }

  ];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    console.log("Removing item: ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing item: ' + index + "...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
 
  }

  addItem() {
    console.log("Adding item to list");
    this.showAddItemPrompt();
  }

  editItem(item, index) {
    console.log("Edit item: ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing item: ' + index + "...",
      duration: 3000
    });
    toast.present();
    this.showEditItemPrompt(item, index);
  }
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Item Name'
        },
        {
          name: 'quantity',
          placeholder: "Item Quantity"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
  showEditItemPrompt(item, index) {
    const prompt = this.alertCtrl.create({
      title: 'Edit Item',
      message: "Please edit item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Item Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: "Item Quantity",
          value: item.quantity
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items[index] = item;
          }
        }
      ]
    });
    prompt.present();
  }






}
