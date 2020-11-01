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

    const getTreeNode = (node: TreeNodeType) => (
        <TreeNode title={node.title}>
            {node.children && node.children.map((node, index) => (
                getTreeNode(node)
            ))}
        </TreeNode>
    )

    const calculateTotal = (nodes: TreeNodeType[]) => {
        let total = nodes.length
        nodes.forEach(node => {
            if (node.children) total += calculateTotal(node.children);
        });
        return total
    }

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
                defaultExpandedKeys={['1']}
                treeData={nodes}
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
            />
        </div>
    )
}