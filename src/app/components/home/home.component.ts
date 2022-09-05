import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards1=[{
    title:'London',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3198/london2.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
  {
    title:'Greece',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1112/Best%20of%20Greece.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
  {
    title:'Paris',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Paris012.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
  {
    title:'New York',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3665/New-York.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
 
];
  cards2=[{
    title:'Bali',
    image:'https://www.planetware.com/wpimages/2022/03/indonesia-bali-top-attractions-places-to-visit-lempuyang-temple-complex.jpg',
    btnText:'Visit Now'
  },
{
    title:'Maldives',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Medhufushi%20Resort.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
  {
    title:'Bangkok',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/Bangkok8.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
  {
    title:'Dubai',
    image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/comic-con-festival.jpg?crop=370:240&downsize=370:240',
    btnText:'Visit Now'
  },
];

cards3=[{
  title:'India',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHXLvOpamxAvMg7P9Jtzv491eCa8Urdp_1w&usqp=CAU',
  btnText:'Visit Now'
},
{
  title:'Turkey',
  image:'https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/shutterstock_1293922393.jpg',
  btnText:'Visit Now'
},
{
  title:'Malaysia',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy_ksyOaIo_u7yqTQMr7Rrx9DSK1xycrUkXmlmxiHnbPyQu1Xn6ioM3QsCAV-gF5EEj8&usqp=CAU',
  btnText:'Visit Now'
},
{
  title:'Egypt',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSnPQWMFD0kMykDPXCkcB73Kzj09cxuGy6w&usqp=CAU',
  btnText:'Visit Now'
},
];


  constructor() { }

  ngOnInit(): void {
  }

}
