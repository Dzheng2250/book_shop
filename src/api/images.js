import imgurl1 from '../assets/images/1.jpg'
import imgurl2 from '../assets/images/2.jpg'
import imgurl3 from '../assets/images/3.jpg'
import imgurl4 from '../assets/images/4.jpg'

const images = [
  { id: 1, img: imgurl1 },
  { id: 2, img: imgurl2 },
  { id: 3, img: imgurl3 },
  { id: 4, img: imgurl4 }
]

export default {
  getImageList (callback) {
    setTimeout(() => callback(images), 100)
  }
}
