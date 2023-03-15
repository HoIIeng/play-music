//% color="#FFAB19" weight=100 icon="\uf08c"
namespace 自訂文字{
    //% block="顯示 | 文字 %text |顏色 %fg | 背景 %bg"
    //% fg.min=0 fg.max=15 bh.min=0 bg.max=15
    //% text.defl="Hello"
    export function 顯示文字 (text: string, fg: number, bg: number){
        const font = image.font8;
        const width = font.charWidth * text.length;
        const height = font.charHeight;
        const res = image.create(width, height);
        res.fill(bg);
        res.print(text,0,0,fg,font);
        const sprite = sprites.create(res, SpriteKind.Food);
        return sprite;
    }
}