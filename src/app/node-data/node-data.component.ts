import { Component, OnInit, Input } from '@angular/core';
import { NodeService } from 'src/service/nodeservice';

@Component({
  selector: 'app-node-data',
  templateUrl: './node-data.component.html',
  styleUrls: ['./node-data.component.css']
})
export class NodeDataComponent implements OnInit{

  @Input() node?: Node;


  constructor(
    private nodeService: NodeService
  ) {}

  getNodeData(): void {
    const id = Number()
  }

  ngOnInit(): void {
    
  }
}
