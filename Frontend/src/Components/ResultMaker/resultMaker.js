export const resultMaker=(question,answer)=>{
let correct=0;
let wrong=0;
let skipped=0;
for(let i=0;i<question.length;i++){
    if (!answer[i])skipped++
    else if(question[i].answer===answer[i])correct++;
    else wrong++;
}
let percentage=( correct * 100 ) / question.length
let status=percentage>=75?"Excellent":percentage>=60?"Very Good":percentage>=33?"Good":"Poor"
    return {
    total_question:question.length,
    attempted:answer.length,
    correct_answer:correct,
    wrong_answer:wrong,
    skipped,
    percentage,
    status
}
}