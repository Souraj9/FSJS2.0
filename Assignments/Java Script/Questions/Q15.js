/* 15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F */





    function grade(score) {
        if (score >= 80 && score <=100) {
            return 'Grade (A)';
        }
        else if (score >= 70 && score <=79) {
            return 'Grade (B)';
        }
        else if (score >= 60 && score <=69) {
            return 'Grade (C)';
        }
        else if (score >= 50 && score <=59) {
            return 'Grade (D)';
        }
        else if (score >= 0 && score <=49) {
            return 'Grade (F)';
        }
    }
    let result = grade(85)
    console.log(result);