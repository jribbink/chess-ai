import { Bishop, ChessBoard, ChessPiece, King, Knight, Pawn, Queen, Rook } from "./board"

if(location.host == "www.chess.com") {
    loadChessboard()
}

function loadChessboard() {
    var boardDOM = document.getElementsByClassName("board")
    var tiles = boardDOM[0].getElementsByClassName("piece")

    var pieces: (ChessPiece | undefined)[][] = [[]]

    for(var i = 0; i < 8; i++) {
        pieces[i] = []
        for(var j = 0; j < 8; j++) {
            pieces[i][j] = undefined
        }
    }
    
    for(var i = 0; i < tiles.length; i++) {
        var classes = tiles[i].className.split(" ")
        var isWhite = classes[1].charAt(0) == 'b'
        var loc = classes[2].substr(7)

        var col = Number(loc.charAt(0)) - 1
        var row = Number(loc.charAt(1)) - 1

        pieces[row][col] = parsePiece(classes[1].charAt(1), row, col, isWhite)
    }

    console.log(JSON.stringify(pieces))
}

function parsePiece(type: string, row: number, col: number, isWhite: boolean): ChessPiece | undefined {
    switch(type) {
        case 'p':
            return new Pawn(row, col, isWhite)
        case 'r':
            return new Rook(row, col, isWhite)
        case 'n':
            return new Knight(row, col, isWhite)
        case 'b':
            return new Bishop(row, col, isWhite)
        case 'k':
            return new King(row, col, isWhite)
        case 'q':
            return new Queen(row, col, isWhite)
    }
    return undefined
}