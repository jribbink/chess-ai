import { Queen } from "../board";
import { SearchNode } from "./search-node";

class UCT {
    static uctValue(totalVisit: number, nodeWinScore: number, nodeVisit: number): number {
        if(nodeVisit == 0) {
            return Infinity
        }
        return (nodeWinScore / nodeVisit) + 1 * Math.sqrt(Math.log(totalVisit) / nodeVisit)
    } 

    static findBestNodeWithUCT(node: SearchNode) {
        var parentVisit: number = node.numVisit
        
        var maxUCT: number = -Infinity
        var maxChild: SearchNode

        node.children.forEach(child => {
            var uct = this.uctValue(parentVisit, child.numWin, child.numVisit)
            if(uct > maxUCT) {
                maxUCT = uct
                maxChild = child
            }
        });
    }
}

export class MonteCarloTreeSearch {
    root: SearchNode
    isWhite: boolean

    MAX_TIME = 30000

    constructor(root: SearchNode, isWhite: boolean) {
        this.root = root
        this.isWhite = isWhite
    }

    findNextMove() {
        if(this.root.board.getStatus() != 0.5)
        {
            return this.root
        }

        this.root.numVisit = 0
        this.root.numWin = 0

        var start = performance.now()
        while(start + this.MAX_TIME < performance.now()) {
            var exploreNode: SearchNode = this.selectPromisingNode(this.root)
            var playoutResult: number = this.simulateRandomPlayout(exploreNode)
    
            this.backPropogation(exploreNode, playoutResult)
        }

        var winnerNode: SearchNode
        for(let node of this.root.children) {
            
        }
    }

    selectPromisingNode(parent: SearchNode) {

    }

    backPropogation(nodeToExplore: SearchNode, result: number) {

    }

    simulateRandomPlayout(node: SearchNode): number {
        var tempNode: SearchNode = new SearchNode(node.board.deepCopy())
        
        var status: number = tempNode.board.getStatus()
        var plies = 0
        while(status == 0.5 && plies < 25) {
            var newNode: SearchNode = tempNode.children[Math.random() * tempNode.children.length]
            tempNode = newNode
        }
        return status
    }
}