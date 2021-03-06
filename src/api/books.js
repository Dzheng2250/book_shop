import bk1 from '../assets/book/1.jpg'
import bk2 from '../assets/book/2.jpg'
import bk3 from '../assets/book/3.jpg'
import bk4 from '../assets/book/4.jpg'
import bk5 from '../assets/book/5.jpg'
import bk6 from '../assets/book/6.jpg'
import bk0 from '../assets/book/0.jpg'

const allbook = [
  { id: 1, img: bk1, name: '梦晓尼罗河（Ⅰ）', price: 45.5 },
  { id: 2, img: bk2, name: '白色巨塔', price: 45.5 },
  { id: 3, img: bk3, name: '青春过隙', price: 45.5 },
  { id: 4, img: bk4, name: '虎犬', price: 45.5 },
  { id: 5, img: bk5, name: '丁香之恋', price: 45.5 },
  { id: 6, img: bk6, name: '汪曾祺小说经典', price: 45.5 },
  { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 }
]
const bookinfo = [
  {
    id: 0,
    img: bk0,
    name: '社会主义发展简史',
    price: 50,
    author: '本书编写组',
    press: '人民出版社',
    info: '&nbsp;&nbsp;&nbsp;本书编写工作在中共中央宣传部领导下进行，得到了马克思主义理论研究和建设工程咨询委员会、中共中央对外联络部、中央党校、中央党史和文献研究院、中国社会科学院等有关部门、四川大学等全国有关高校和广大专家学者的关心、支持和帮助。',
    content:
      '&nbsp;&nbsp;&nbsp;为帮助广大干部群众系统学习世界社会主义500多年的发展历史，按照党中央统一部署，有关部门组织专家学者编写了《社会主义发展简史》。<br/> &nbsp;&nbsp;&nbsp;全书约23万字，从空想社会主义的产生和发展、科学社会主义的创立及其实践、世界社会主义的曲折与奋起、中国特色社会主义开辟社会主义新纪元、中国特色社会主义进入新时代等方面对社会主义500多年的发展历程作了比较系统准确地论述，文风朴实、图文并茂，有助于读者清晰了解世界社会主义的发展脉络。<br/>&nbsp;&nbsp;&nbsp;本书是深化“四史”学习教育的重要权威辅助读物，必将推动广大干部群众坚定“四个自信”，形成历史自觉，更好凝聚起奋进新时代新征程的强大力量。'
  },
  {
    id: 1,
    img: bk1,
    name: '梦晓尼罗河（Ⅰ）',
    price: 45.5,
    author: '桐音',
    press: '北岳文艺出版社',
    info: ' &nbsp;&nbsp;&nbsp;奇幻天后游素兰亲自绘图，首次向大陆推荐新人力作；灵性才女桐音完美演绎漫画精品《尼罗河女儿》，跨越三千年的时空爱恋，动人心魄的旷世情缘。一篇篇缠绵悱恻的爱情乐章、一个个悲欢离合的动人故事，凄美、迷恋，构筑尼罗河神话传说！',
    content: '&nbsp;&nbsp;&nbsp; 抬起头，望见你温暖如曦的眼睛，从彼此交握的手中传来，你的心曲，我了然，那只是为我谱写的旋律，回以最温柔的笑容，相信，这一刻就是永恒……'
  },
  { id: 2, img: bk2, name: '白色巨塔', price: 45.5 },
  { id: 3, img: bk3, name: '青春过隙', price: 45.5 },
  { id: 4, img: bk4, name: '虎犬', price: 45.5 },
  { id: 5, img: bk5, name: '丁香之恋', price: 45.5 },
  { id: 6, img: bk6, name: '汪曾祺小说经典', price: 45.5 }
]

const books = [
  {
    id: 1,
    sub: [
      { id: 1, img: bk1, name: '梦晓尼罗河（Ⅰ）', price: 45.5 },
      { id: 2, img: bk2, name: '白色巨塔', price: 45.5 },
      { id: 3, img: bk3, name: '青春过隙', price: 45.5 },
      { id: 4, img: bk4, name: '虎犬', price: 45.5 },
      { id: 5, img: bk5, name: '丁香之恋', price: 45.5 },
      { id: 6, img: bk6, name: '汪曾祺小说经典', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 10 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 }
    ]
  },
  {
    id: 2,
    sub: [
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 }
    ]
  },
  {
    id: 3,
    sub: [
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 }
    ]
  },
  {
    id: 4,
    sub: [
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 },
      { id: 0, img: bk0, name: '社会主义发展简史', price: 45.5 }
    ]
  }
]

export default {
  getBooksList (index, callback) {
    setTimeout(() => callback(books[index - 1].sub), 100)
  },
  getAllBookList (callback) {
    setTimeout(() => callback(allbook), 100)
  },
  getBookInfo (index, callback) {
    setTimeout(() => callback(bookinfo[index]), 100)
  }
}
