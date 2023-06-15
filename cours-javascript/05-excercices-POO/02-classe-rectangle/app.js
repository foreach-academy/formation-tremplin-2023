class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getPerimeter() {
    return (this.length + this.width) * 2;
  }

  getArea() {
    return this.length * this.width;
  }

  isSquare() {
    if (this.length === this.width) {
      return true;
    } else {
      return false;
    }
  }

  formatInfo() {
    let str = `Longueur : ${this.length} - Largeur : ${
      this.width
    } - Périmètre : ${this.getPerimeter()} - Aire : ${this.getArea()} - `;

    if (this.isSquare()) {
      str += "C'est un carré.";
    } else {
      str += "C'est un rectangle.";
    }

    return str;
  }
}

console.log('Rectangle 1');
const rec1 = new Rectangle(3, 4);
console.log(`Le périmètre est de ${rec1.getPerimeter()} cm.`);
console.log(`La surface est de ${rec1.getArea()} cm².`);

console.log('Rectangle 2');
const rec2 = new Rectangle(5, 5);
console.log(rec2.formatInfo());
