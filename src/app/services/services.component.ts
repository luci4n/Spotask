import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface ServicesNode {
  name: string;
  children?: ServicesNode[];
}

const TREE_DATA: ServicesNode[] = [
  {
    name: 'Web development',
    children: [
      {name: 'Editing and writing code to implenent desired designed and functionality'},
    ]
  }, 
  {
    name: 'Project Management',
    children: [
      {name: 'Analyzing general objective and prioritizing'},
      {name: 'Spliting general objectives in actions or functionalities and managing resources'},
      {name: 'Follow up, KPI reporting'},
      {name: 'Main link with Product Owner'},
    ]
  },
  {
    name: 'Business Analysis',
    children: [
      {name: 'Comparing desired functionality with current implementation'},
      {name: 'Proposing and debating with Product Owner posible user scenarios'},
      {name: 'Estimating benefits from implementation'},
      {name: 'Analyzing design for UI/UX'},
      {name: 'Getting feedback from programmers and reanalyze scenarios'},
    ]
  },
  {
    name: 'Training & Mentoring',
    children: [
      {name: 'One on one or groups of up to six people'},
      {name: 'Evaluating current level'},
      {name: 'Devising objectives and training plan'},
      {name: 'Guidance suited for everybody\'s learning style'}
    ]
  },
  {
    name: 'Design Sprints',
    children: [
      {name: 'Analyzing functionality'},
      {name: 'Proposing design scenarios'},
      {name: 'Checking with design group what solution fits best'}
    ]
  }
];

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  treeControl = new NestedTreeControl<ServicesNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ServicesNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ServicesNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
