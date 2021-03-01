import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:ProductItem[];
  form:ProductItem;
  shower:boolean;
  constructor() {
    this.shower = !true;
    this.products = [
    ];
    this.form = {
      name:"",
      images:["","",""],
      index_img:0,
      description:"",
      rating:0,
      link:"",
      price:0
    }
  }
  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem("products") || `[{"images":["https://images-na.ssl-images-amazon.com/images/I/71dNKkJEQVL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81Pp%2BE7oWjL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71Vd0hOwFEL._AC_SL1500_.jpg"],"index_img":0,"name":"Marvel Hasbro Legends Series 6-inch Collectible Action Dr. Doom Figure and 4 Accessories","description":"From the wreckage of colliding universes, Dr. Doom emerges as the supreme ruler of a new domain known as Battleworld. With over 80 years of entertainment history, Marvel has become a cornerstone of fan collections around the world. With the Marvel Legends Series, fan favorite Marvel comics and Marvel Cinematic Universe characters are designed with premium detail and articulation for posing and display in collections. From figures to vehicles to premium roleplay items, the Marvel Legends Series offers elite character-inspired product for Marvel fans and collectors. Additional figures each sold separately. Subject to availability.","rating":3.5,"link":"https://www.amazon.com/Marvel-Hasbro-Legends-Collectible-Accessories/dp/B08MVXHNDR/ref=sr_1_4?dchild=1&fst=as%3Aoff&pf_rd_i=16225015011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=da121563-253a-4b83-b6ab-b694e4e456ac&pf_rd_r=SND6222H8QC0MR8X4WDD&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1486493146&refinements=p_n_shipping_option-bin%3A3242350011&rnid=165795011&s=toys-and-games&sr=1-4","price":9},{"images":["https://images-na.ssl-images-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg","https://images-na.ssl-images-amazon.com/images/I/81Ke1uk4VwL._SL1500_.jpg","https://onyxgame.com/img/game/spider-man-ps4/screenshots/spider-man-ps4-image-screenshot-1.jpg"],"index_img":0,"name":"Marvel's Spider-Man: Miles Morales Launch Edition - PlayStation 4","description":"Spider-man: miles morales standalone digital bonuses; tor.A.C.K. Suit second spidey suit gravity well gadget extra skill points","rating":4.3,"link":"https://www.amazon.com/Marvels-Spider-Man-Miles-Morales-Launch-PlayStation/dp/B08JHVG9ZJ/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=Y290Z1X4XRZGB22K84B8&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1510597020&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-2","price":49.99},{"images":["https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81zsiJ%2BJnfL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81Tte45ADrL._AC_SL1500_.jpg"],"index_img":0,"name":"HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)","description":"OUTSTANDING VISUALS – This FHD display with IPS technology gives you brilliant visuals and unforgettable quality; with a maximum resolution of 1920 x 1080 @ 75 Hz, you’ll experience the image accuracy and wide-viewing spectrums of premium tablets and mobile devices","rating":4.7,"link":"https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/ref=lp_16225007011_1_2","price":169.99},{"images":["https://images-na.ssl-images-amazon.com/images/I/71XKRz2rkPL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/611OEj1g2TL._AC_SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"],"index_img":0,"name":"Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver","description":"Acer Aspire 5 A515-43-R19L comes with these high level specs: AMD Ryzen 3 3200U Dual-Core Processor 2.6GHz with Precision Boost up to 3.5GHz (Up to 4MB L3 Cache), Windows 10 in S mode, 15.6 Full HD (1920 x 1080) widescreen LED-backlit IPS Display, AMD Radeon Vega 3 Mobile Graphics, 4GB DDR4 Memory, 128GB PCIe NVMe SSD, True Harmony Technology, Two Built-in Stereo Speakers, Acer Purified. Voice Technology with Two Built-in Microphones, 802.11ac Wi-Fi featuring 2x2 MIMO technology (Dual-Band 2.4GHz and 5GHz), 10/100/1000 Gigabit Ethernet LAN (RJ-45 port), Bluetooth 4.0, Back-lit Keyboard, HD Webcam (1280 x 720), 1 - USB 3.1 Gen 1 Port, 2 - USB 2.0 Ports, 1 - HDMI Port with HDCP support, Lithium-Ion Battery, up to 7.5-hours Battery Life, 3.97 lbs. | 1.8 kg (system unit only) (NX.HG8AA.001).","rating":4.9,"link":"https://www.amazon.com/Acer-Display-Graphics-Keyboard-A515-43-R19L/dp/B07RF1XD36/ref=lp_16225007011_1_4","price":548.99},{"images":["https://images-na.ssl-images-amazon.com/images/I/615PHGxiucL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/61-pRUJtA%2BL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/61Xj6NRzDPL._AC_SL1500_.jpg"],"index_img":0,"name":"Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black","description":"System Requirements: Windows 7 or higher (Windows 8.1 or higher required for resolutions greater than 1080p)macOS 10.10 or higher Chrome OS Version 29.0.1547.70 and higher2 GB RAM or more Hard drive space for recorded videosOne USB 2 or USB 3 port (4K recording and streaming requires a USB 3.0 port and compatible software)|Certified compatibility for Skype for Business Microsoft Cortana Windows Hello and Cisco Jabber Enhanced integration with Blue Jeans Broadsoft Life-size Cloud Video and Zoom Works with most any video conferencing application | Certified compatibility for Skype for Business Microsoft Cortana Windows Hello and Cisco Jabber Enhanced integration with Blue Jeans Broadsoft Life-size Cloud Vidyo and Zoom Works with most any video conferencing application Windows: Works with ChromaCam by Personify  Mac: Beta driver available Windows: Works with ChromaCam by Personify|Mac: Beta driver available Windows: Works with Camera for Windows 10 XSplit OBSMac: Works with SwiftCapture|Windows: Works with Camera for Windows 10 XSplit OBS|Mac: Works with SwiftCapture.","rating":4.6,"link":"https://www.amazon.com/Logitech-BRIO-Conferencing-Recording-Streaming/dp/B01N5UOYC4/ref=sr_1_26?dchild=1&qid=1613840746&s=computers-intl-ship&sr=1-26","price":193.9},{"images":["https://images-na.ssl-images-amazon.com/images/I/51kHiPeTSmL._AC_SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/71YigYwIIcL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71fFXHe5%2BLL._AC_SL1500_.jpg"],"index_img":0,"name":"Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)","description":"Vengeance LPX memory is designed for high performance Overclocking. The heat spreader is made of pure aluminum for faster heat dissipation, and the eight layer PCB helps manage heat and provides superior Overclocking headroom. Each IC is individually screened for performance potential. The DDR4 form factor is optimized for the latest Intel 100 series motherboards and offers higher frequencies, greater bandwidth, and lower power consumption than DDR3 modules. Vengeance LPX DDR4 modules are compatibility tested across 100 Series motherboards for reliably fast performance. There's XMP 2.0 support for trouble free automatic Overclocking. And, they're available in multiple colors to match your motherboard, your components, or just your style.","rating":4.8,"link":"https://www.amazon.com/Corsair-Vengeance-3200MHz-Desktop-Memory/dp/B0143UM4TC/ref=sr_1_25?dchild=1&qid=1613840746&s=computers-intl-ship&sr=1-25","price":84.99},{"images":["https://images-na.ssl-images-amazon.com/images/I/61Mxxpot8wL._AC_SL1075_.jpg","https://images-na.ssl-images-amazon.com/images/I/71cjHNA%2Bw9L._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81CqDOJSfbL._AC_SL1500_.jpg"],"index_img":0,"name":"JustJamz Kidz Jelly Roll Colorful in-Ear Headphones 3.5mm Stereo Bulk Earbuds for Classroom School Library - 10 Pack","description":"JustJamz Kidz Jelly Roll Colorful Earbud Headphones Earphones - 10 Pack offer both style and comfort while enjoying listening pleasure with the multi-color 10 Pack In-Ear Earbud Headphones. iPhone Android Compatible ErgoFit Design for ultimate comfort & fit ear cord length input carry case. Listen to the well-balanced audio playback with JustJamz 2.0 earphones. This pair of earphones offers great audio with reduced noise. Use them to watch movies, videos, play games, listen to conference calls, video call your friend and much more. Soft silicone ear tips offer the best fit for a longer use. No slipping from the ear and keeps the outside noise to a minimum. Sound Effect: The headphones provide full and vivid sound Stylish Design: Multiple colors to choose from with vibrant colorful jelly style Noise Isolation: The headphone come with silicon earbuds to ensure a snug, noise isolating fit so that you can focus on the sound and enjoy your entertainment Package Includes: 10 Colorful vibrant Jelly In-Ear Earbud Headphones","rating":4,"link":"https://www.amazon.com/JustJamz-Colorful-Headphones-Earbuds-Classroom/dp/B01L2WR7H8/ref=sr_1_32_sspa?dchild=1&qid=1613840746&s=computers-intl-ship&sr=1-32-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUzFDQzRBT1I1QVdRJmVuY3J5cHRlZElkPUEwNTEzNjg3M0tOTFE0OE83VTdFViZlbmNyeXB0ZWRBZElkPUEwODM3MzEzN1VXTE1UWE5QN0tUJndpZGdldE5hbWU9c3BfYnRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=","price":17.99},{"images":["https://images-na.ssl-images-amazon.com/images/I/61o4-FKjH%2BL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71rZbcCP4iL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71uVwrK9SPL._AC_SL1500_.jpg"],"index_img":0,"name":"Computer Speakers,Small USB-Powered PC Gaming Speakers with Blue LED Lights and Bass Enhancement Stereo Surround Sound,Creative Cool Speakers for Desktop Laptop Tablet(Black)","description":"【USB power supply Widely compatible】: no need to set up additional power supply equipment, save complicated wire management, only keep the USB cable connected to the computer interface to supply power, make the desktop more concise, and the audio input can be connected to computers, TVs, mobile phones, etc.","rating":2,"link":"https://www.amazon.com/Computer-Speakers-USB-Powered-Enhancement-Surround/dp/B08NCV9VSS/ref=sr_1_50_sspa?dchild=1&qid=1613840746&s=computers-intl-ship&sr=1-50-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVU5PODdKREE3SkVXJmVuY3J5cHRlZElkPUEwMjkwMDI5MjhYMzVTWlFNTzlZOCZlbmNyeXB0ZWRBZElkPUEwNDE1NjM1MzVVM0g4WElYUEhMVSZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1","price":24.99},{"images":["https://images-na.ssl-images-amazon.com/images/I/71knyebZpGL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/51UgA7xRzuL._AC_US40_AA50_.jpg","https://images-na.ssl-images-amazon.com/images/I/51KMKikzlnL._AC_US40_AA50_.jpg"],"index_img":0,"name":"Portable Monitor - FANGOR 15.6 Full HD 1080P USB Type-C HDMI Computer Display IPS Screen with Dual Speaker Gaming Monitor Laptop PC MAC Surface Phone PS4 Include Smart Cover","description":"With this portable & lightweight Type C/HDMI portable monitor, you can copy you screen to share with others, expand the screen to improve work efficiency, and the portable design make it easy to carry. Moreover, if you want to enjoy gaming on large display, these portable computer monitors will also be a great choice to refresh your in-game experience.","rating":5,"link":"https://www.amazon.com/dp/B08MQFHFK4/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B08MQFHFK4&pd_rd_w=aJRyA&pf_rd_p=4269e1a0-a218-4fbd-9748-1cd337d2f2a5&pd_rd_wg=onBAm&pf_rd_r=3V1SPP76QCEWX5BHX492&pd_rd_r=ce638a51-a2a6-4331-8f3c-cf0c5bffe143&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNjlKSExXSUpSR0szJmVuY3J5cHRlZElkPUEwMTc1OTY2MklUUzdXQ1BMUFdQQSZlbmNyeXB0ZWRBZElkPUEwOTM5NzMxMkpUUE1SMEhMRU1GNCZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=","price":169.98},{"images":["https://images-na.ssl-images-amazon.com/images/I/61HW57vp4QL._SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/51q%2BeRDeOEL._AA50_.jpg","https://images-na.ssl-images-amazon.com/images/I/41oBLRJBuhL._AA50_.jpg"],"index_img":0,"name":"iHealth No-Touch Forehead Thermometer, Digital Infrared Thermometer for Adults and Kids, Touchless Baby Thermometer with 3 Ultra-Sensitive Sensors, Large LED Display and Gentle Vibration Alert (PT3)","description":"The intuitive single-button control design thermometer reads the temperature in just 1 second from a clear bright large LED screen, even in total darkness. The quiet vibrating alert eliminates buzzing noise or disturbance.","rating":4.5,"link":"https://www.amazon.com/iHealth-Thermometer-Vibration-Notification-Thermopile/dp/B075QQ8VZW/ref=lp_16225005011_1_11","price":29.99}]`);
  }
  round(num:number):number{
    return Math.round(Math.min(num,5));
  }
  rightMove(product:ProductItem):void{
    product.index_img = (product.index_img + 1)%product.images.length;
  }
  leftMove(product:ProductItem):void{
    product.index_img = (product.index_img - 1 + (product.index_img == 0 ? product.images.length: 0));
  }
  share(link:string, item:ProductItem):void{
    window.open(link + "Йоу, как тебе эта вещь ? Вот ссылка: " + item.link);
  }
  showerMethod():void{
    this.shower = !this.shower;
    let elm = document.querySelector<HTMLElement>(".shower-hider")!;
    if(this.shower) elm.style.backgroundColor = "green";
    else elm.style.backgroundColor = "red";
  }
  save():void{
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  addProductItem():void{
    this.products.push({
      name:this.form.name,
      images:this.form.images,
      index_img:0,
      description:this.form.description,
      rating:this.form.rating,
      link:this.form.link,
      price:this.form.price
    })
    this.save();
  }
  check():void{
    let good = this.form.name.trim()!="" &&
    this.form.images[0].trim() != "" && 
    this.form.images[1].trim() != "" && 
    this.form.images[2].trim() != "" && 
    this.form.description.trim()!="" &&
    this.form.rating >=0 &&
    this.form.link.trim() != "" &&
    this.form.price > 0;
    if(good){
      this.addProductItem();  
    } else alert("Не правильно заполнены поля");
  }
  del(item:ProductItem):void{
    let willDel = confirm("Are you sure?");
    if(willDel) this.products.splice(this.products.indexOf(item),1);
    this.save();
  }
}
interface ProductItem{
  images:string[];
  index_img:number;
  name:string;
  description:string;
  rating:number;
  link:string;
  price:number;
}