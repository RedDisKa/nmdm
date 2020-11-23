import React from 'react'
import Tree, { TreeNode } from 'rc-tree'
import {TreeNodeType} from '../../types'
import './rc-tree.scss';
import s from './simpletree.module.scss'
import { DataNode, EventDataNode } from 'rc-tree/lib/interface';
import { NodeDragEventParams } from 'rc-tree/lib/contextTypes';

interface Props {
    nodes: TreeNodeType[],
    showTotal: boolean,
    onItemSelect?: (node: TreeNodeType) => void,
    onItemChangedPosition: (node: TreeNodeType, destinationNode: TreeNodeType) => void
}

export const DraggableTree = ({nodes, showTotal, onItemSelect, onItemChangedPosition}: Props) => {

    const calculateTotal = (nodes: TreeNodeType[]) => {
        let total = nodes.length
        nodes.forEach(node => {
            if (node.children) total += calculateTotal(node.children);
        });
        return total
    }

    const getTitleWithCount = (title: string, count: number) => (
        <div className={s.custom_title}>
          <p>{title}</p>
          <p>{count}</p>
        </div>
      );
    
      const getNode = (node: TreeNodeType) => (
        <TreeNode
          title={
            node.children && node.children.length > 0
              ? getTitleWithCount(node.title, node.children.length)
              : node.title
          }
          key={node.key}
        >
          {node.children && node.children.map((child) => getNode(child))}
        </TreeNode>
      );    

    return (
        <div>
            {showTotal && (
          <div className={s.list_total}>
            <p className={s.list_total_title}>Total</p>
            <p className={s.list_total_value}>{calculateTotal(nodes)}</p>
          </div>
        )}
        <Tree
                defaultExpandAll={true}
                selectable={true}
                draggable={true}
                onDrop={(info: NodeDragEventParams<HTMLDivElement> & {
                    dragNode: EventDataNode;
                    dragNodesKeys: React.ReactText[];
                    dropPosition: number;
                    dropToGap: boolean;
                }) => {
                    const {dragNode, node} = info
                    onItemChangedPosition((dragNode as TreeNodeType), (node as TreeNodeType))
                }}
                onSelect={(selectedKeys: React.ReactText[], info: {
                    event: "select";
                    selected: boolean;
                    node: EventDataNode;
                    selectedNodes: DataNode[];
                    nativeEvent: MouseEvent;
                }) => onItemSelect && onItemSelect((info.selectedNodes[0] as TreeNodeType))}
                dropIndicatorRender={() => (null)}
            >
                {nodes.map((node) => getNode(node))}
            </Tree>
        </div>
    )
}