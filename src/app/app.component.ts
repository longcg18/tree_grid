import { Component, OnInit } from '@angular/core';
import { TreeNode} from 'primeng/api'
import { NodeService } from 'src/service/nodeservice';
import { NodeDataComponent } from './node-data/node-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tree_grid';

  files!: TreeNode[] ;
  
  selected_node!: TreeNode[] | null ;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
  }

  expandAll() {
    this.files.forEach((node) => {
        this.expandRecursive(node, true);
    });
  }

  collapseAll() {
      this.files.forEach((node) => {
          this.expandRecursive(node, false);
      });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
      node.expanded = isExpand;
      if (node.children) {
          node.children.forEach((childNode) => {
              this.expandRecursive(childNode, isExpand);
          });
      }
  }
}
