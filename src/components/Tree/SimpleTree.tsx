import React from 'react'
import Tree from 'rc-tree'
import {TreeNodeType} from '../../types'
import './rc-tree.scss';
import s from './simpletree.module.scss'

interface Props {
    nodes: TreeNodeType[],
    showTotal: boolean
}

export const SimpleTree = ({nodes, showTotal}: Props) => {

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
                selectable={false}
            />
        </div>
    )
}