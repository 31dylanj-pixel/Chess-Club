const lessons = {

    king: [

        {
            type: "explanation",
            title: "The King",
            text: "Let's start with the king, the most important piece in chess.",
            button: "Let's Start!",
            pieces: {
                e1: "wk.svg"
            }
        },
        
        
        {
            type: "movement",
            title: "How the King Moves",
            text: "The king can move one square in any direction.",
            button: "Continue",
        
            pieces: {
                e1: "wk.svg"
            },
        
            highlights: [
                "d1",
                "d2",
                "e2",
                "f2",
                "f1"
            ]
        },
        
        
        {
            type: "challenge",
            title: "Challenge 1/3",
            text: "Drag your king to capture the pawn.",
            
            pieces: {
                e1: "wk.svg",
                f2: "bp.svg"
            },
        
            target: "f2"
        
        },
        
        
        {
            type: "challenge",
            title: "Challenge 2/3",
            text: "Nice! Now capture the next pawn.",
        
            pieces: {
                f2: "wk.svg",
                g1: "bp.svg"
            },
        
            target: "g1"
        
        },
        
        
        {
            type: "challenge",
            title: "Challenge 3/3",
            text: "Keep it up! One more to go!",
        
            pieces: {
                g1: "wk.svg",
                e2: "bp.svg"
            },
        
            target: "e2"
        
        },
        
        
        {
            type:"complete",
            title:"Lesson Complete!",
            text:"Good job! Now you know how to move the king.",
            button:"Finish",
        
            pieces:{
                e2:"wk.svg"
            }
        },
    
    ],

    queen: [

        {
            type: "explanation",
            title: "The Queen",
            text: "The queen is the most powerful piece in chess. It can move in many directions.",
            button: "Let's Start!",
    
            pieces: {
                d4: "wq.svg"
            }
        },
    
    
        {
            type: "movement",
            title: "How the Queen Moves",
            text: "The queen can move any number of squares horizontally, vertically, or diagonally.",
            button: "Continue",
    
            pieces: {
                d4: "wq.svg"
            },
    
            highlights: [
    
                // Horizontal
                "a4",
                "b4",
                "c4",
                "e4",
                "f4",
                "g4",
                "h4",
    
                // Vertical
                "d1",
                "d2",
                "d3",
                "d5",
                "d6",
                "d7",
                "d8",
    
                // Diagonal up-left
                "c5",
                "b6",
                "a7",
    
                // Diagonal up-right
                "e5",
                "f6",
                "g7",
                "h8",
    
                // Diagonal down-left
                "c3",
                "b2",
                "a1",
    
                // Diagonal down-right
                "e3",
                "f2",
                "g1"
    
            ]
        },
    
    
        {
            type: "challenge",
            title: "Challenge 1/4",
            text: "Move your queen horizontally to capture the pawn.",
    
            pieces: {
                d1: "wq.svg",
                h1: "bp.svg"
            },
    
            target: "h1"
        },
    
    
        {
            type: "challenge",
            title: "Challenge 2/4",
            text: "Nice! Now move your queen vertically.",
    
            pieces: {
                h1: "wq.svg",
                h8: "bp.svg"
            },
    
            target: "h8"
        },
    
    
        {
            type: "challenge",
            title: "Challenge 3/4",
            text: "Great! Now move your queen diagonally.",
    
            pieces: {
                h8: "wq.svg",
                e5: "bp.svg"
            },
    
            target: "e5"
        },
    
    
        {
            type: "challenge",
            title: "Challenge 4/4",
            text: "Final challenge! Use any queen movement to capture the pawn.",
    
            pieces: {
                e5: "wq.svg",
                a5: "bp.svg"
            },
    
            target: "a5"
        },
    
    
        {
            type: "complete",
            title: "Lesson Complete!",
            text: "Good job! Now you know how to move the queen.",
            button: "Finish",
    
            pieces: {
                a5: "wq.svg"
            }
        }
    
    ],
    
    pawn: [

        {
            type: "explanation",
            title: "Moving Forward",
            text: "Pawns move forward one square at a time. Unlike most pieces, pawns cannot move backwards.",
            button: "Next"
        },

        {
            type: "explanation",
            title: "First Move",
            text: "On its first move, a pawn may move either one or two squares forward.",
            button: "Next"
        },

        {
            type: "explanation",
            title: "Capturing",
            text: "Pawns capture diagonally one square forward to the left or right.",
            button: "Next"
        },

        {
            type: "practice",
            title: "Practice 1",
            text: "Move the pawn forward one square.",
            button: "Check"
        },

        {
            type: "practice",
            title: "Practice 2",
            text: "Move the pawn forward two squares from its starting position.",
            button: "Check"
        },

        {
            type: "practice",
            title: "Practice 3",
            text: "Capture the piece on the left.",
            button: "Check"
        },

        {
            type: "practice",
            title: "Practice 4",
            text: "Capture the piece on the right.",
            button: "Check"
        },

        {
            type: "practice",
            title: "Practice 5",
            text: "Find the correct pawn move.",
            button: "Check"
        },

        {
            type: "quiz",
            title: "Quiz 1",
            text: "Can this pawn move two squares?",
            button: "Check"
        },

        {
            type: "quiz",
            title: "Quiz 2",
            text: "Find the legal capture.",
            button: "Check"
        },

        {
            type: "quiz",
            title: "Quiz 3",
            text: "Complete the final pawn challenge.",
            button: "Check"
        },

        {
            type: "complete",
            title: "Lesson Complete!",
            text: "Congratulations! You have completed the Pawn lesson.",
            button: "Finish"
        }

    ],
    
    rook: [

        {
            type: "explanation",
            title: "The Rook",
            text: "Rooks move any number of squares horizontally or vertically.",
            button: "Next"
        },
    
        {
            type: "complete",
            title: "Rook Lesson Complete!",
            text: "You learned how rooks move.",
            button: "Finish"
        }
    
    ]
};
