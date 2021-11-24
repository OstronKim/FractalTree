class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }

  show() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  //Ha en slider som bestämmer hur många branches som ska göras
  branchA() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 4);
    dir.mult(0.67); //Shrink
    let newEnd = p5.Vector.add(this.end, dir);

    let right = new Branch(this.end, newEnd);
    return right;
  }
  branchB() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67); //Shrink
    let newEnd = p5.Vector.add(this.end, dir);

    let left = new Branch(this.end, newEnd);
    return left;
  }
}
