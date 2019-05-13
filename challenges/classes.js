// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attributes) {
//     this.lengthh = attributes.lengthh;
//     this.width = attributes.width;
//     this.height = attributes.height;
// }

// CuboidMaker.prototype.volume = function() {
//     return this.lengthh * this.width * this.height;
//     }
    
// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.lengthh * this.width + this.lengthh * this.height + this.width * this.height);
// }

class CuboidMakerRefactor {
    constructor(attributes) {
        this.lengthh = attributes.lengthh;
        this.width = attributes.width;
        this.height = attributes.height;
    }

    volume() {
        return this.lengthh * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.lengthh * this.width + this.lengthh * this.height + this.width * this.height);
    }
}

const cuboidRefactor = new CuboidMakerRefactor({
    lengthh: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`Refactor `, cuboidRefactor.volume()); // 100
console.log(`Refactor `, cuboidRefactor.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.