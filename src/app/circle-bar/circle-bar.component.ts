import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {ID3Line} from '../shared/D3Line';

@Component({
  selector: 'app-circle-bar',
  templateUrl: './circle-bar.component.html',
  styleUrls: ['./circle-bar.component.css']
})
export class CircleBarComponent implements OnInit {

  constructor() { }
  private svg;
  private firstBar;
  private secondBar;
  private panelBar;
  private startAngle = 0 ;
  private endAngle = 1;
  private width = 1366;
  private height = 400;

  private groupText;
  private groupText2;
  private createSvg(): void {
    this.svg = d3.select("figure#circle-bar")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
  }
  private drawCircleBars(): void {
    // Create the X-axis band scale
    this.firstCircleBar();
    this.secondCircleBar();
  
  }

  firstCircleBar(){
    const arcColor: string = '#1E212D';
    const whiteColor: string = '#FFFFFF';
    const greyColor: string = '#483628';
    let offset = 177;

    let text1: string = 'тн';
    let text2: string = "Выработка";

    let index1: number = 0;
    let index2: number = 31265;
    let index3: number = 31265;

    const arcFunc = (start,end,inner,outer,cornerR = 0) =>{
      return d3.arc().innerRadius(inner).outerRadius(outer).startAngle(start * Math.PI * 2).endAngle(end * Math.PI * 2).cornerRadius(cornerR);
    }
    this.firstBar = this.svg.append('g');
    //Circle
    this.firstBar.append('circle')
      .attr('cx', 167)
      .attr('cy', 167)
      .attr('r', 167)
      .style('fill', '#161922')
      .style('stroke-width', 3)
      .style('stroke', '#222532')
      .style('transform', 'translate(' + 10 + 'px,' + 10 + 'px)');
      //Top Big Arc
    this.firstBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcFunc(-0.15,0.15,155,166))
      .style('transform', 'translate(' + offset + 'px,' + offset + 'px');
      //Bottom Big Arc
    this.firstBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcFunc(0.35,0.65,155,166))
      .style('transform', 'translate(' + offset + 'px,' + offset + 'px');
      //Top Small Arc
    this.firstBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcFunc(-0.07,0.07,150,157))
      .style('transform', 'translate(' + offset + 'px,' + offset + 'px)');
      //Bottom Small Arc
    this.firstBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcFunc(0.43,0.57,150,157))
      .style('transform', 'translate(' + offset + 'px,' + offset + 'px');
      // Inner-Outer Arc
      this.firstBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcFunc(0,1,113,130))
      .style('transform', 'translate(' + offset + 'px,' + offset + 'px)');
      // Filler Arc Grey
      this.firstBar.append('path')
      .style('fill', greyColor)
      .attr('d', arcFunc(0,1,119,124))
      .style('transform', 'translate(' + offset + 'px,' + offset + 'px)');

    let scale = d3.scaleLinear().domain([0,1]).range([0,31265]);

    let interval =  setInterval(()=>{
        index1 = Math.floor(scale(this.startAngle));
        index3 = Math.floor(scale(1 - this.startAngle));
        let nextAngle = this.startAngle += 0.001;
        if(nextAngle > this.endAngle - 0.3){
          clearInterval(interval);
        }
        this.firstBar.append('path')
          .style('fill', whiteColor)
          .attr('d', arcFunc(0,nextAngle,119,124))
          .style('transform', 'translate(' + offset + 'px,' + offset + 'px)');
        this.groupTextFirstCircle(text1, text2, index1, index2, index3);
        
     },50);
  }

  secondCircleBar(){
    const arcColor: string = '#1E212D';
    const whiteColor: string = '#FFFFFF';
    const greyColor: string = '#483628';
    let offsetX = 350;
    let offsetY = 177;

    let text1: string = 'тн';
    let text2: string = "План переработки";

    let index1: number = 33994;
    let index2: number = 36859;
    let index3: number = -2865;

    this.secondBar = this.svg.append('g').style('transform','translate(175px,0)');

    let dashes = new Array(160);
    dashes = [...dashes.map((x,i)=>i)];

    const arc = d3.arc()
      .innerRadius(155)
      .outerRadius(166)
      .startAngle(Math.PI + Math.PI / 2 + Math.PI * 0.20)
      .endAngle(Math.PI * 2 + Math.PI * 0.3);
    const arcBottom = d3.arc()
      .innerRadius(156)
      .outerRadius(166)
      .startAngle(Math.PI * 0.7)
      .endAngle(Math.PI + Math.PI * 0.3);
    const arcSmallTop = d3.arc()
      .innerRadius(150)
      .outerRadius(157)
      .startAngle(Math.PI + Math.PI / 2 + Math.PI * 0.35)
      .endAngle(Math.PI * 2 + Math.PI * 0.15);
    const arcSmallBottom = d3.arc()
      .innerRadius(150)
      .outerRadius(157)
      .startAngle(Math.PI * 0.85)
      .endAngle(Math.PI + Math.PI * 0.15);
    const arcFiller = d3.arc()
      .innerRadius(102)
      .outerRadius(125)
      .startAngle(Math.PI + Math.PI * 0.3)
      .endAngle(Math.PI * 2 + Math.PI * 0.5);

    this.secondBar.append('circle')
      .attr('cx', offsetX)
      .attr('cy', offsetY)
      .attr('r', 167)
      .style('fill', '#161922')
      .style('stroke-width', 3)
      .style('stroke', '#222532')
    this.secondBar.append('path')
      .style('fill', arcColor)
      .attr('d', arc)
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    this.secondBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcBottom)
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    this.secondBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcSmallTop)
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px)');
    this.secondBar.append('path')
      .style('fill', arcColor)
      .attr('d', arcSmallBottom)
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    const arcFunc = (start,end,inner = 112,outer = 135) => {
      return d3.arc()
      .innerRadius(inner)
      .outerRadius(outer)
      .startAngle(start * Math.PI * 2)
      .endAngle(end * Math.PI * 2)
    }
    this.secondBar.append('path')
      .style('fill','#1C1F2B')
      .attr('d',d3.arc().innerRadius(105).outerRadius(143).startAngle(-0.35 * Math.PI * 2).endAngle(0.35 * Math.PI * 2))
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    this.secondBar.append('path')
      .style('fill','#303549')
      .attr('d',d3.arc().innerRadius(105).outerRadius(143).startAngle(-0.355 * Math.PI * 2).endAngle(-0.35 * Math.PI * 2))
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    this.secondBar.append('path')
      .style('fill','#303549')
      .attr('d',d3.arc().innerRadius(105).outerRadius(143).startAngle(0.35 * Math.PI * 2).endAngle(0.355 * Math.PI * 2))
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    
    let scale = d3.scaleLinear().domain([0,1]).range([0,36859]);
    for(let i = 0;i < dashes.length;i++){
      if(-0.35 + i * 1 / 50 >= 0.35){
        break;
      }
      let interval =  setInterval(()=>{
        index1 = Math.floor(scale(this.startAngle));
        index3 = Math.floor(scale(1 - this.startAngle));
        let nextAngle = this.startAngle += 0.001;
        if(nextAngle > this.endAngle - 0.3){
          clearInterval(interval);
        }
       this.secondBar.append('path')
          .style('fill', '#1E212D')
          .attr('d', arcFunc(-0.35 + i * 1 / 50,-0.35 + (i + 1) * 1 /50 - Math.PI / 300,96,92))
          .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
        this.groupTextSecondCircle(text1, text2, index1, index2, index3);     
     },50);
      
    }
    //Yellow bar
    for(let i = 0;i < dashes.length;i++){
      if(-0.35 + i * 1 / 150 >= 0.35){
        break;
      }
      this.secondBar.append('path')
      .style('fill', '#F7931E') 
      .attr('d',arcFunc(-0.35 + i * 1 / 150,-0.35 + (i + 1) * 1 /150 - Math.PI / 1500))
      .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px')
    }
    for(let i = 0;i < dashes.length;i++){
      if(-0.35 + i * 1 / 150 >= 0.25){
        this.secondBar.append('path')
        .style('fill', '#fff') 
        .attr('d',arcFunc(-0.35 + i * 1 / 150,-0.35 + (i + 1) * 1 /150 - Math.PI / 1500,106,143))
        .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px')
        break;
      }
      // TODO : REMAKE INTERVAL 
    //   let interval =  setInterval(()=>{
    //     index1 = Math.floor(scale(this.startAngle));
    //     index3 = Math.floor(scale(1 - this.startAngle));
    //     let nextAngle = this.startAngle += 0.001;
    //     if(nextAngle > this.endAngle - 0.3){
    //       clearInterval(interval);
    //     }
       this.secondBar.append('path')
          .style('fill', '#0089FF') 
          .attr('d',arcFunc(-0.35 + i * 1 / 150,-0.35 + (i + 1) * 1 /150 - Math.PI / 1500))
          .style('transform', 'translate(' + offsetX + 'px,' + offsetY + 'px');
    //     this.groupTextSecondCircle(text1, text2, index1, index2, index3);     
    //  },1000);
    }
    
  }

  groupTextFirstCircle(text1, text2, index1, index2, index3) {
    if(this.groupText){this.groupText.remove()}
    this.groupText = this.svg.append('g')
      .style('transform', 'translate(' + 155 + 'px,' + 100 + 'px)')
    this.groupText.append('text')
      .text(text1)
      .attr('class', 'text1')
      .style('transform', 'translate(' + 10 + 'px,' + 10 + 'px)')
      .style('fill', '#606580')
      .style('font-size', 24)
    this.groupText.append('text')
      .text(text2)
      .attr('class', 'text2')
      .style('transform', 'translate(' + -39 + 'px,' + 45 + 'px)')
      .style('fill', '#D7E2F2')
      .style('letter-spacing', 1)
      .style('font-size', 24)
    this.groupText.append('text')
      .text(this.checkIndex(index1))
      .attr('class', 'text3')
      .style('transform', 'translate(' + -20 + 'px,' + 85 + 'px)')
      .style('fill', '#D7E2F2')
      .style('font-size', 28)
    this.groupText.append('text')
      .text(this.checkIndex(index2))
      .attr('class', 'text4')
      .style('transform', 'translate(' + -20 + 'px,' + 120 + 'px)')
      .style('fill', '#0089FF')
      .style('font-size', 28)
    this.groupText.append('text')
      .text(this.checkIndex(index3))
      .attr('class', 'text5')
      .style('transform', 'translate(' + -15 + 'px,' + 160 + 'px)')
      .style('fill', 'rgba(247, 147, 30, 1)')
      .style('font-size', 28);
  }

  groupTextSecondCircle(text1, text2, index1, index2, index3){
    if(this.groupText2)this.groupText2.remove();
    this.groupText2 = this.svg.append('g')
    .style('transform','translate(500px,100px)');
    this.groupText2.append('text')
      .text(text1)
      .style('transform', 'translate(' + 13 + 'px,' + 10 + 'px)')
      .style('fill', '#606580')
      .style('font-size', 20)
      .style('letter-spacing', '1px');

      this.groupText2.append('text')
      .text(this.checkIndex(index1))
      .style('transform', 'translate(' + -27 + 'px,' + 50 + 'px)')
      .style('fill', '#D7E2F2')
      .style('font-size', 31);
      
      for(let i = 0;i < 31;i++){
        this.groupText2.append('line')
        .attr('x1',-35 + i * 3.5 )
        .attr('y1',57)
        .attr('x2',-35 + (i + 1) * 3.5 - 2)
        .attr('y2',57)
        .attr('stroke','#1E212D')
        .attr('stroke-width','2px')
      }

      this.groupText2.append('text')
      .attr('class','text3')
      .text(this.checkIndex(index2))
      .style('transform', 'translate(' + -22 + 'px,' + 90 + 'px)')
      .style('fill', '#0089FF')
      .style('letter-spacing', 1)
      .style('font-size', 27);

      this.groupText2.append('text')
      .attr('class','text4')
      .text(this.checkIndex(index3))
      .style('transform', 'translate(' + -12 + 'px,' + 130 + 'px)')
      .style('fill', '#F7931E')
      .style('letter-spacing', 1)
      .style('font-size', 23)

      let divideText2 = this.groupText2.append('text').style('transform','translate(-3px,165px)');
      
      divideText2.append('tspan')
      .text(text2.split(' ')[0])
      .style('transform', 'translate(' + -5 + 'px,' + 174 + 'px)')
      .style('fill', '#D7E2F2')
      .style('letter-spacing', 1)
      .style('font-size', 23);

      divideText2.append('tspan')
      .text(text2.split(' ')[1])
      .attr('dy','1em')
      .attr('x','-40px')
      .style('fill','#D7E2F2')
      .style('font-size',23)
  }

  checkIndex(index) {
    let firstPart = index < 0 ? String(Math.ceil(index / 1000)) : String(Math.floor(index / 1000));
    let secondPart = Math.abs(index % 1000) > 0 && Math.abs(index % 1000) < 10 ? '00' + Math.abs(index % 1000) : Math.abs(index % 1000) > 10 && Math.abs(index % 1000) < 100 ? '0' + Math.abs(index % 1000) : Math.abs(index % 1000);
    return firstPart + ' ' + secondPart;
  }

  drawPanelBar(){
    let offset:number = 104;
    let index1:number = 1049;
    let index2:number = 0;
    let textCircle:string = 'тн';


    let textMaterial:string = 'Гудрон';
    let textBeforeChart:string = 'Накопительно:';

    let index3:number = 1049;
    let index4:number = 9517;
    let percentFill:number = 81;

     let arc = (start,end,inner = 87,outer = 94,cornerRadius = 0,padR = 0)=>{
      return d3.arc().innerRadius(inner).outerRadius(outer).startAngle(start * 2 * Math.PI).endAngle(end * 2 * Math.PI).cornerRadius(cornerRadius).padRadius(padR);
    }

    this.panelBar = this.svg.append('g').style('transform','translate(700px,100px)');

    let mainBlockRect = this.panelBar.append('rect').attr('width',600).attr('height',223).attr('fill','#161922').style('transform','translate(104px,-8px)');
    let topBlockRect = this.panelBar.append('rect').attr('width',800).attr('height',55).attr('fill','#21242F').style('transform','translate(104px,-7px)');
this.panelBar.append('text')
    .text(index2)
    .attr('font-size',26)
    .style('transform','translate('+94+'px,'+Number(offset+38) + 'px)')
    .style('fill','#606580');

    this.panelBar.append('text').text(textMaterial).attr('fill','#D7E2F2').attr('font-size',30).style('transform','translate(230px,30px)');

    this.panelBar.append('text').text(this.checkIndex(index3)).attr('fill','#0089FF').attr('font-size',26).style('transform','translate(500px,30px)');

    this.panelBar.append('text').text(textBeforeChart).attr('fill','#606580').attr('font-size',22).style('transform','translate(230px,77px)');
    
    this.panelBar.append('text').text(this.checkIndex(index4)).attr('fill','#606580').attr('font-size',26).style('transform','translate(500px,79px)');

    //Columns
    for(let i = 0;i < 30;i++){
      let columnGroup = this.panelBar.append('g');
      let column;
      if(i == 6){
        column = columnGroup.append('rect').attr('x',230 + i * 11.3).attr('y',103).attr('width',7).attr('height',94).attr('rx',2).attr('fill','#122F4E');
      }else {
        column = columnGroup.append('rect').attr('x',230 + i * 11.3).attr('y',103).attr('width',7).attr('height',94).attr('rx',2).attr('fill','#272A38');
      }
      
      // for(let j = 0;j < 5;j++){
      //   column.append('rect').attr('width',6).attr('height',2).style('transform','translate('+ )
      // }
      let bricks;
      switch (i) {
        case 0:
          bricks = 11
          break;
        case 1:
          bricks = 11
          break;
        case 2:
          bricks = 18
          break;
        case 3:
          bricks = 13
          break;
        case 4:
          bricks = 16
          break;
        case 5:
          bricks = 8
          break;
        case 6:
          bricks = 11
          break;
        case 7:
          bricks = 11
          break;
        default:
          break;
      }  
      for(let j = 0;j < bricks;j++){
        columnGroup.append('rect').attr('width',5).attr('rx',1).attr('height',3).attr('x',231 + i * 11.3).attr('y',193 - j * 4 - 2.7).attr('fill','#0089FF');
      }   
    }

    //Cross-Curve line
//TODO :find right method for curve  line
    let dataDotsCurveLine = [
    {x: 229, y: 149},{x: 250, y: 149},{x: 250, y: 144},
    {x: 262, y: 144},{x: 262, y: 149},{x: 273, y: 149},
    {x: 273, y: 159},{x: 284, y: 159},{x: 284, y: 146},
    {x:307,y:146},{x:307,y:130},{x:330,y:130},
    {x:330,y:142},{x:340,y:142},{x:340,y:144},
    {x:364,y:144},{x:364,y:130},{x:386,y:130},
    {x:386,y:146},{x:420,y:146},{x:420,y:134},
    {x:443,y:134},{x:443,y:146},{x:465,y:146},
    {x:465,y:141},{x:476,y:141},{x:476,y:128},
    {x:510,y:128},{x:510,y:133},{x:533,y:133},
    {x:533,y:146},{x:566,y:146}];
    
    let line = d3.line<ID3Line>().x(d => d.x).y(d => d.y).curve(d3.curveLinear);

    this.panelBar.append('path').attr('d',line(dataDotsCurveLine)).attr('stroke','#0089FF').attr('stroke-width',2).attr('fill','none').attr('stroke-linejoin','round');
    

    //Vertical percent bar
    this.panelBar.append('rect').attr('width',68).attr('height',220).attr('fill','#161922').style('transform','translate(586px,-8px)').attr('stroke','#1E212D').attr('stroke-width',2);

    this.panelBar.append('path').attr('d',arc(0,0.5,104,109,10)).attr('fill','#1B1E27').style('transform','translate('+offset+'px,'+offset+'px)');
  
    this.panelBar.append('text').style('transform','translate(597px,29px)').append('tspan').text(percentFill).attr('font-size',26).attr('fill','#D7E2F2').append('tspan').text('%').attr('fill','#606580').attr('font-size',18);
    // .text(percentFill).attr('fill','#D7E2F2').attr('font-size',26).style('transform','translate(597px,29px)');

    this.panelBar.append('rect').attr('x',590).attr('y',55).attr('width',60).attr('height',153).attr('fill','#122F4E');

    this.panelBar.append('rect').attr('x',590).attr('y',93).attr('width',60).attr('height',97).attr('fill','#0089FF');

    for(let i = 0;i < 15;i++){
      this.panelBar.append('line').attr('x1',591 + i * 4).attr('y1',83).attr('x2',591 + (i + 1) * 4 - 2).attr('y2',83).attr('stroke','#FFFFFF').attr('stroke-width','2px');
      this.panelBar.append('line').attr('x1',591 + i * 4).attr('y1',195).attr('x2',591 + (i + 1) * 4 - 2).attr('y2',195).attr('stroke','#FFFFFF').attr('stroke-width','2px');
    }


    let circle = this.panelBar.append('circle')
      .attr('cx',offset)
      .attr('cy',offset)
      .attr('r',offset)
      .attr('fill','#161922')
      .attr('stroke-width',3)
      .attr('stroke','#1E212D');
    
   

    let refillableArc = this.panelBar.append('path')
      .attr('fill','#122F4E')
      .attr('d',arc(0,1,undefined,undefined,5))
      .style('transform','translate('+offset+'px,'+offset+'px)');

    let fillableArc = this.panelBar.append('path')
      .attr('fill','#0089FF')
      .attr('d',arc(0,0.9,undefined ,undefined ,5))
      .style('transform','translate('+offset+'px,'+offset+'px)');

    let arcOuter = this.panelBar.append('path')
      .attr('fill','#1E212D')
      .attr('d',arc(0, 0.5, offset + 5,offset + 8 , 1000 ))
      .style('transform','translate('+offset+'px,'+offset+'px)');

    let textElem = this.panelBar.append('text')
    .text(textCircle)
    .attr('font-size',22)
    .style('transform','translate('+92+'px,'+Number(offset / 2) + 'px)')
    .style('fill','#606580');

    let index1Elem = this.panelBar.append('text')
    .text(this.checkIndex(index1))
    .attr('font-size',26)
    .style('transform','translate('+Number(offset - 34)+'px,'+offset + 'px)')
    .style('fill','#D7E2F2');

    for(let i = 0;i < 23;i++){
        this.panelBar.append('line')
        .attr('x1',58 + i * 3.7)
        .attr('y1',113)
        .attr('x2',58 + (i + 1) * 3.7 - 2.3)
        .attr('y2',113)
        .attr('stroke','#282C39')
        .attr('stroke-width','2px')
    }

    let index2Elem = this.panelBar.append('text')
    .text(index2)
    .attr('font-size',26)
    .style('transform','translate('+94+'px,'+Number(offset+38) + 'px)')
    .style('fill','#606580');



  }

  ngOnInit() {
    this.createSvg();

    this.drawCircleBars();

    this.drawPanelBar();
  }
}
