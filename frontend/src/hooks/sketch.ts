import p5 from 'p5';

class Block {
    x: number;
    y: number;
    width: number;
    height: number;
    velocityY: number;
    color: {r:number,g:number,b:number};
  
    constructor(x: number, y: number, width: number, height: number, velocityY: number, color: {r:number,g:number,b:number}) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.velocityY = velocityY;
      this.color = color;
    }
}

export const sketch = (p: p5) => {
    let blocks: Block[] = [];
  
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.draw = () => {
        p.background(1000);
  
        // Add a new block at a random position at the top
        if (p.frameCount % 60 === 0) { // Add a new block every 60 frames
            let b = new Block(p.random(p.width), 0, 50, 50, p.random(2, 5),{r:p.random(255),g:p.random(255),b:p.random(255)});
            blocks.push(b);
        }
        
        blocks.forEach(block => {
            block.y += block.velocityY;

            // no border of the blocks
            p.noStroke();
            
            // Use the block's random color
            p.fill(block.color.r, block.color.g, block.color.b);
            
            // Draw the block with rounded corners
            // The last parameter specifies the radius of the corners
            p.rect(block.x, block.y, 50, 50, 10); // Adjust the 10 to make the corners more or less rounded
        });
        
        // Remove blocks that have fallen past the bottom
        blocks = blocks.filter(block => block.y < p.height);
    };
};