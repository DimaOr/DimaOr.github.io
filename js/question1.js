/**
 * Created by Дмитрий on 01.08.2016.
 */
//Question #1
//As a day-to-day activity, you will have to work with existing enterprise code and be able to figure out what it is doing.
//  See the attached file (sampleCode_js.txt). It contains one JS function from a real project. Name of that function was changed, and all comments were removed. The function also calls some other functions. Their code is not provided in the file, but you can rely on their names.
//  Try to describe what this function does. No need to comment every line and describe everything in details. 5-6 sentences should be enough.
//
/*
Answer
 This function send to the server some information without reloading page and return object or execute callback function it depends of value isAsync.
 If value isAsync - true, function will be work asynchronous and execute callback function, if isAsync - false function will be return response object.
 Before get request we preparing data and adding to the value request (which will be url key on ajax request object) value time.
 When status will be success, function get response data.
  This function will be checking data with checkSessionExpiredResponse method and if result will be true, function “doSomething” will be invokes again-recursion
   else return object or execute callback function or generated error.
 */
