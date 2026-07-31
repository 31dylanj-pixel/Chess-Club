const lessons = {

    king: [

        {
            type: "explanation",

            title: "The King",

            text: "Let's start with the king, the most important piece in the game.",

            button: "Let's Start!",

            board: {
                e1: "wk.svg"
            }

        },


       {
            type: "explanation",
        
            title: "King Movement",
        
            text: "The king can move one square in any direction.",
        
            button: "Continue",
        
            board: {
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
            type: "practice",

            title: "Challenge 1/3",

            text: "Drag your king to capture the pawn.",

            button: "",

            board: {
                e1: "wk.svg",
                f2: "bp.svg"
            },

            challenge: {
                from: "e1",
                target: "f2"
            }

        },


        {
            type: "practice",

            title: "Challenge 2/3",

            text: "Nice! Now capture the next pawn.",

            button: "",

            board: {
                f2: "wk.svg",
                g1: "bp.svg"
            },

            challenge: {
                from: "f2",
                target: "g1"
            }

        },


        {
            type: "practice",

            title: "Challenge 3/3",

            text: "Keep it up! One more to go!",

            button: "",

            board: {
                g1: "wk.svg",
                e2: "bp.svg"
            },

            challenge: {
                from: "g1",
                target: "e2"
            }

        },


        {
            type: "complete",

            title: "Lesson Complete!",

            text: "Good job! Now you know how to move the king.",

            button: "Finish",

            board: {
                e2: "wk.svg"
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
