var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-1",
  "level": "1",
  "url": "ch-1.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction and Preliminaries",
  "body": " Introduction and Preliminaries  Something goes here    "
},
{
  "id": "ch-2",
  "level": "1",
  "url": "ch-2.html",
  "type": "Chapter",
  "number": "2",
  "title": "First Order Differential Equations",
  "body": " First Order Differential Equations   Intro goes here.     "
},
{
  "id": "sec-3-1",
  "level": "1",
  "url": "sec-3-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction",
  "body": " Introduction    Understand basics of order linear differential equations     The order linear differential equations are of the form where the functions and are continuous on some interval We say that is  homogeneous  on if for all in and  nonhomogeneous  on if for some in We will usually have on If for some point of we will simply restrict our attention to a smaller interval, denoted again by , on which With these consideration, can be rewritten in the form  and are continuous on some interval This is achieved by dividing both sides of by to obtain and redefining the functions as respectively.    A function defined on is said to be a  solution  of if for all in that is, if is satisfied for all in when we substitute for     In , we note the following.     Derivatives of at the endpoints (if any) of are understood as one-sided.    Solutions may be complex-valued, though real solutions are preferred in applications. For with real and , where , and higher derivatives are computed similarly.       Let be functions defined on some interval , be a point in , and be fixed numbers. The order linear differential equation subject to the conditions (called initial conditions) is called an initial value problem (IVP) .    It is essential to know when an initial value problem has a solution if are continuous on some interval containing . This is addressed by the existence and uniqueness theorem stated below, whose proof requires advanced calculus and is beyond the scope of this book.   (Existence and Uniqueness)   Let be continuous functions on some interval , be a point in , and be fixed numbers. Then the IVP has a unique solution defined on      When for all in and , it follows from that the function for all in is the unique solution of the IVP. By the uniqueness, if at least one of is nonzero, then the unique solution of the IVP in must be a nonzero function.   The superposition principle discussed below provides a general procedure for constructing new solutions from known solutions.   (Superposition Principle)   Suppose that are solutions of the homogeneous linear equation where are continuous on some interval Then, for any constants (possibly complex), the function is a solution on The expression is called a  linear combination  (or  superposition  ) of with  weights        We treat the special case here for clarity of this proof and leave the general case as an exercise. Let and be solutions on of and let for constants and Then on We note that the differentiation rules also apply when and are complex. Substituting these into the left side of the differential equation gives on Since satisfies on for we obtain Thus, is a solution of on     The superposition principle provides the following basic operations for constructing new solutions from known solutions.     If is a solution, then is also a solution for any constant .    If and are solutions, then so is        We can verify that and are solutions of which is a homogeneous linear equation. Moreover, and are also solutions. In fact, and are solutions for any constants and    When building new solutions of a homogeneous linear differential equation from a collection of known solutions, it is desirable to use a minimal set of solutions as building blocks. Even if several solutions are available, we may not actually need many of them, and some solutions can be discarded based on how they are related to the remaining solutions. This important technique is addressed in the next subsection.    Linear Independence  Two functions and defined on an interval are said to be linearly independent on if neither function is a constant multiple of the other. For instance, the functions and are linearly independent on , as are and on . The concept of linear independence of functions extends naturally to any finite collection of functions, as formalized in the following definition.    The functions defined on an interval , where is a positive integer, are said to be  linearly independent on  if the relation holds for all in  only when the constants satisfy . If this condition does not hold, that is, if there exist constants , not all zero , satisfying the above relation for all in , then the functions are said to be  linearly dependent on  .    We say that the set is linearly independent on if the functions are linearly independent on Similarly, we say that the set is linearly dependent on if the functions are linearly dependent on   The linear dependence or independence of a set of functions on an interval may change when the interval is changed or when functions are added or removed. It follows directly from the definition that if the set is linearly independent on then it remains linearly independent on any larger interval containing provided the functions are defined on Similarly, if the set is linearly dependent on it will also be linearly dependent on every subinterval of   Moreover, using the definition above, any subset of a linearly independent set of functions is itself linearly independent, whereas a set that contains a linearly independent set can be linearly dependent. Similarly, a set containing a linearly dependent set of functions is necessarily linearly dependent, whereas a subset of a linearly dependent set can be linearly independent.  Suppose the functions are linearly dependent on an interval . Then there exist constants , not all zero, such that for all in Since the constants are not all zero, at least one of them must be nonzero. Suppose, for instance, that Then, from , we can express on . This shows that is a linear combination of the remaining functions. Similarly, if then on , and so is a linear combination of the remaining functions. In general, for any integer with and  implies that is a linear combination of the remaining functions. Thus, if is a linearly dependent set of functions defined on then at least one of the functions can be expressed as a linear combination of the others. In particular, this means that any set containing the zero function is necessarily linearly dependent.  From a linearly dependent set, it is often desirable to remove any function that can be expressed as a linear combination of the remaning functions. By repeatedly removing such functions, we eventually obtain a linearly independent set. The functions in this linearly independent set can then be used to construct new functions by forming linear combinations.    Determine whether and are linearly independent on     Suppose there are constants and that satisfy for all in The main question here is: can we have at least one of nonzero? In view of , we can take Therefore and are linearly dependent on       Determine whether and are linearly independent on     Suppose there are constants and that satisfy for all in Again, can we have at least one of nonzero? Differentiating both sides with respect to gives for all in Since is never zero, we have for all in Differentiating both sides with respect to yields Using in yields Using in , we get Therefore and are linearly independent on       The Wronskian  The methods used in and to test the linear independence of functions can become cumbersome, especially when the functions involved are more complicated than those in the examples. In this book, we will typically need to determine whether a set of solutions of homogeneous linear differential equations is linearly independent. For such sets of solutions, the linear independence of solutions can be determined by using the Wronskian , a determinant involving solutions and their derivatives, introduced in 1812 by the Polish mathematician Józef Wroński.   (Wronskian)   Let be functions that are times differentiable on an interval Their  Wronskian  , denoted by (or simply by ), is a function on defined by on       Compute the Wronskian of and on     The Wronskian of and is on     The next theorem provides a Wronskian test for linear independence of differentiable functions.   (Wronskian Test for Linear Independence)   Let be times differentiable functions on an interval with Then are linearly independent on      For simplicity, we treat the case the general case is analogous. Suppose that and are differentiable functions on an interval such that on Let and be constants such that for all in Differentiating gives for all in Since for every in the linear system consisting of the and has the unique solution for every in Hence and are linearly independent on .       The conclusion of holds even if at just one point in . The case appears as (i) in .    The converse of is not true. For example, take the differentiable functions and on We know from Example that are linearly independent on however, their Wronskian on     We will see in for the case and in for the general case that the converse of also holds if are solutions of a order homogeneous linear differential equation.    A useful formula for the Wronskian of two solutions of a second order linear homogeneous equation is derived in . Problem in shows how the Wronskian can be used to determine a second linearly independent solution when one solution is known.         Determine whether each set of functions below is linearly independent on the specified interval using or the discussion that follows it.                                                                              Suppose that are differentiable functions on an interval     Let be point in such that Show that are linearly independent on     Determine whether the functions and considered in are linearly independent on     Find examples of that are linearly independent on and satisfy for all in       "
},
{
  "id": "sec-3-1-2",
  "level": "2",
  "url": "sec-3-1.html#sec-3-1-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  Understand basics of order linear differential equations   "
},
{
  "id": "sec-3-1-3-1",
  "level": "2",
  "url": "sec-3-1.html#sec-3-1-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " homogeneous   nonhomogeneous  "
},
{
  "id": "def-3-1",
  "level": "2",
  "url": "sec-3-1.html#def-3-1",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A function defined on is said to be a  solution  of if for all in that is, if is satisfied for all in when we substitute for    "
},
{
  "id": "def-3-2",
  "level": "2",
  "url": "sec-3-1.html#def-3-2",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  Let be functions defined on some interval , be a point in , and be fixed numbers. The order linear differential equation subject to the conditions (called initial conditions) is called an initial value problem (IVP) .   "
},
{
  "id": "existence-uniqueness-theorem",
  "level": "2",
  "url": "sec-3-1.html#existence-uniqueness-theorem",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "(Existence and Uniqueness).",
  "body": " (Existence and Uniqueness)   Let be continuous functions on some interval , be a point in , and be fixed numbers. Then the IVP has a unique solution defined on    "
},
{
  "id": "rem-3-1",
  "level": "2",
  "url": "sec-3-1.html#rem-3-1",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": " When for all in and , it follows from that the function for all in is the unique solution of the IVP. By the uniqueness, if at least one of is nonzero, then the unique solution of the IVP in must be a nonzero function.  "
},
{
  "id": "superposition-principle-theorem",
  "level": "2",
  "url": "sec-3-1.html#superposition-principle-theorem",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "(Superposition Principle).",
  "body": " (Superposition Principle)   Suppose that are solutions of the homogeneous linear equation where are continuous on some interval Then, for any constants (possibly complex), the function is a solution on The expression is called a  linear combination  (or  superposition  ) of with  weights      "
},
{
  "id": "sec-3-1-3-11",
  "level": "2",
  "url": "sec-3-1.html#sec-3-1-3-11",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We treat the special case here for clarity of this proof and leave the general case as an exercise. Let and be solutions on of and let for constants and Then on We note that the differentiation rules also apply when and are complex. Substituting these into the left side of the differential equation gives on Since satisfies on for we obtain Thus, is a solution of on   "
},
{
  "id": "rem-3-2",
  "level": "2",
  "url": "sec-3-1.html#rem-3-2",
  "type": "Remark",
  "number": "3.1.6",
  "title": "",
  "body": " The superposition principle provides the following basic operations for constructing new solutions from known solutions.     If is a solution, then is also a solution for any constant .    If and are solutions, then so is      "
},
{
  "id": "sec-3-1-3-13",
  "level": "2",
  "url": "sec-3-1.html#sec-3-1-3-13",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": " We can verify that and are solutions of which is a homogeneous linear equation. Moreover, and are also solutions. In fact, and are solutions for any constants and   "
},
{
  "id": "def-3-3",
  "level": "2",
  "url": "sec-3-1.html#def-3-3",
  "type": "Definition",
  "number": "3.1.8",
  "title": "",
  "body": "  The functions defined on an interval , where is a positive integer, are said to be  linearly independent on  if the relation holds for all in  only when the constants satisfy . If this condition does not hold, that is, if there exist constants , not all zero , satisfying the above relation for all in , then the functions are said to be  linearly dependent on  .   "
},
{
  "id": "ex-test-for-indepedence-1",
  "level": "2",
  "url": "sec-3-1.html#ex-test-for-indepedence-1",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  Determine whether and are linearly independent on     Suppose there are constants and that satisfy for all in The main question here is: can we have at least one of nonzero? In view of , we can take Therefore and are linearly dependent on    "
},
{
  "id": "ex-test-for-independence-2",
  "level": "2",
  "url": "sec-3-1.html#ex-test-for-independence-2",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Determine whether and are linearly independent on     Suppose there are constants and that satisfy for all in Again, can we have at least one of nonzero? Differentiating both sides with respect to gives for all in Since is never zero, we have for all in Differentiating both sides with respect to yields Using in yields Using in , we get Therefore and are linearly independent on    "
},
{
  "id": "Wronskian-2",
  "level": "2",
  "url": "sec-3-1.html#Wronskian-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Wronskian "
},
{
  "id": "def-wronskian-n",
  "level": "2",
  "url": "sec-3-1.html#def-wronskian-n",
  "type": "Definition",
  "number": "3.1.11",
  "title": "(Wronskian).",
  "body": " (Wronskian)   Let be functions that are times differentiable on an interval Their  Wronskian  , denoted by (or simply by ), is a function on defined by on    "
},
{
  "id": "wronskian-calculation",
  "level": "2",
  "url": "sec-3-1.html#wronskian-calculation",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Compute the Wronskian of and on     The Wronskian of and is on    "
},
{
  "id": "thm-wronskian-nonzero-1",
  "level": "2",
  "url": "sec-3-1.html#thm-wronskian-nonzero-1",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "(Wronskian Test for Linear Independence).",
  "body": " (Wronskian Test for Linear Independence)   Let be times differentiable functions on an interval with Then are linearly independent on    "
},
{
  "id": "Wronskian-7",
  "level": "2",
  "url": "sec-3-1.html#Wronskian-7",
  "type": "Proof",
  "number": "3.1.2.1",
  "title": "",
  "body": " For simplicity, we treat the case the general case is analogous. Suppose that and are differentiable functions on an interval such that on Let and be constants such that for all in Differentiating gives for all in Since for every in the linear system consisting of the and has the unique solution for every in Hence and are linearly independent on .  "
},
{
  "id": "Wronskian-8",
  "level": "2",
  "url": "sec-3-1.html#Wronskian-8",
  "type": "Remark",
  "number": "3.1.14",
  "title": "",
  "body": "    The conclusion of holds even if at just one point in . The case appears as (i) in .    The converse of is not true. For example, take the differentiable functions and on We know from Example that are linearly independent on however, their Wronskian on     We will see in for the case and in for the general case that the converse of also holds if are solutions of a order homogeneous linear differential equation.    A useful formula for the Wronskian of two solutions of a second order linear homogeneous equation is derived in . Problem in shows how the Wronskian can be used to determine a second linearly independent solution when one solution is known.     "
},
{
  "id": "exercises-3-1-1",
  "level": "2",
  "url": "sec-3-1.html#exercises-3-1-1",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "",
  "body": " Determine whether each set of functions below is linearly independent on the specified interval using or the discussion that follows it.                                                                            "
},
{
  "id": "exercises-3-1-2",
  "level": "2",
  "url": "sec-3-1.html#exercises-3-1-2",
  "type": "Exercise",
  "number": "3.1.3.2",
  "title": "",
  "body": " Suppose that are differentiable functions on an interval     Let be point in such that Show that are linearly independent on     Determine whether the functions and considered in are linearly independent on     Find examples of that are linearly independent on and satisfy for all in     "
},
{
  "id": "sec-3-2",
  "level": "1",
  "url": "sec-3-2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Second Order Homogeneous Linear Differential Equations",
  "body": " Second Order Homogeneous Linear Differential Equations    Understand methods of solutions for second order homogeneous linear differential equations     We now discuss the Wronskian of solutions of second order homogeneous linear equations.  Let and be solutions of the homogeneous linear differential equation where and are continuous functions on an interval The  Wronskian  of and , denoted by , , or simply , is defined as Let us examine the derivative of the Wronskian We have where we used and It then follows that where is a fixed number in The formula is known as Abel’s formula . It follows from this formula that is a constant when on Also, if , then for all in On the other hand, since it follows that for all in if and for all in if Thus, either is identically zero or it does not change its sign in   The analysis of the Wronskian together with the formula above also hold for higher order homogeneous linear equations (see Section?? Higher Order).   (Criterion for Linearly Indepedent Solutions)   Two solutions and of where and are continuous functions on an interval are linearly independent on if and only if for all in      Let and be linearly independent solutions of on . Suppose, for a contradiction, that there is a point in such that Let and be constants. Then the linear system has a solution not both zero because the determinant of the coefficient matrix is zero. Fix , not both zero, satisfying , and define the function on By and the superposition principle, is a solution on of the initial value problem The uniqueness part of Theorem  implies on that is, on Thus, and are linearly dependent on , contradicting our assumption. Hence for every in   Suppose that on By , and are linearly independent on . Note that and need not be solutions for this part of the theorem to hold.     Existence of Fundamental Sets of Solutions    Consider the second order homogeneous linear differential equation where and are continuous functions on an interval Two solutions and that are linearly independent on are said to form a  fundamental set of solutions  of the differential equation. Each of these solutions, and , is referred to as a fundamental solution.    An important question arises: does a fundamental set of solutions always exist? The following theorem ensures the existence of a fundamental set of solutions for second order homogeneous linear equations when and are continuous. These concepts extend naturally to higher order equations.    Consider the second order homogeneous linear differential equation where and are continuous functions on an interval Then there exist two functions and on that form a fundamental set of solutions for .     By , there exists a unique solutions of the initial value problem and a unique of the initial value problem The two solutions and are linearly independent on In fact, let be constants such that for all in Since is in we have which implies . We then only have for all in Differentiating yields for all in Since we must have Thus, forms a fundamental set of solutions for on   Let be a fundamental set of solutions of on the interval where both and are continuous. Denote by the Wronskian of and . Let be a point in Since and are linearly independent on we have Then the Wronskian of and is Obviously, Hence we have Thus, the solutions in a fundamental set can be scaled so that the Wronskian of the scaled solutions is where is a fixed point in      Find the Wronskian of a fundamental set of solutions of each of the following differential equations.                       (i) Take in There is a fundamental set of solutions whose Wronskian is  (ii) Take in There is a fundamental set of solutions whose Wronskian is  (iii) Take in There is a fundamental set of solutions whose Wronskian is     The next theorem provides a method for finding the general solutions of second order homogeneous linear differential equations.    Let form a fundamental set of solutions of the second order homogeneous linear differential equation where and are continuous functions on an interval Then the functions of the form are solutions on for any constants and . Moreover, every solution of is of form for some constants and .     For any and constants, the implies that is a solution of on   To show that every solution of is of this form , let be a solution of on and be in Denote by and the constants and , respectively. Then solves the initial value problem On the other hand, let and be constants to be determined so that satisfies Then Since is a linearly independent set of solutions, implies and therefore, by the Cramer’s rule, we find the unique values of and given by With these values of and , the function solves the same initial value problem as . By the uniqueness part of Theorem  , we conclude that on      Constructing Fundamental Sets of Solutions  We now discuss methods for determining fundamental sets of solutions for second order homogeneous linear differential equations with constant coefficients, specifically where are constant coefficients and This equation can equivalently be written in the standard form Because the coefficient functions are constants and defined on the interval in the existence and uniqueness theorem ( ) for is the entire set of real numbers Consequently, the solutions in any fundamental set are defined on   Motivated from first order linear equations, we expect that solutions appear as exponential functions. So, we let be a trial solution of for some number (possibly complex) Differentiating twice with respect to and substituting into yields for all in In particular, when we obtain which is called the  auxiliary  (or  characteristic ) The polynomial is called the  characteristic polynomial  for the differential equation . equation for . The roots  Solutions would be a more precise term, but we use  roots  here to avoid confusion with solutions of differential equations. of are given by which are  distinct real  ,  complex  , or  repeated  according as , , or . We now construct a fundamental set of solutions for each case.   Case I. (Distinct Real Roots)  When , the auxiliary equation possesses two distinct real roots and given by . Take Since it follows that and are linearly independent solutions of . We confirm the linear independence of and by evaluating their Wronskian: on . Therefore, is a fundamental set of solutions. By , the general solution of is where and are arbitrary constants.    Case II. (Complex Roots)  When , we have where , the imaginary unit in the complex number system. Then the auxiliary equation possesses two distinct complex roots and given by . Take Let It is evident that Then the roots and of the auxiliary equation give the complex-valued solutions and of . To extract real-valued solutions, we use first use the Euler formula and write It is evident that which imply Since and are solutions of (and equivalently of ), it follows from the superposition principle ( ) that and are solutions of the homogeneous equation . Denote and Then and are linearly independent solutions because their Wronskian satisfies for all in . Thus, is a fundamental set of solutions. By , the general solution of is where and are arbitrary constants.    Case III. (Repeated Root)  In this case, the auxiliary equation has a repeated real root as given in . Consequently, we obtain only a single solution: Since a fundamental set of solutions for requires two linearly independent solutions, we must determine a second solution so that forms a fundamental set of solutions.  We next discuss a method known as  reduction of order  , which allows us to find a second linearly independent solution of a second order homogeneous linear differential equation, even when the equation has variable coefficients, as in , given that one nontrivial solution is already known.  Let be a known solution of where and are continuous functions on an interval satisfying either for all in or for all in . guarantees the existence of such a nonzero solution on for the initial condition We assume on ; the other case can be treated similarly.  Our goal is to find a second solution such that is linearly independent on To this end, let be a function on such that is a solution of . If we find a non-constant function then it will follow that is a fundamental set of solutions. Then, suppressing from the arguments for simplicity, we have Substituting these into gives which becomes Since is a solution of , we have and therefore we obtain We observe that there is no in this equation. Let Then the equation becomes which is of the first order. Since never vanishes on , we can rewrite the above equation as A solution of is given by Since we obtain on and consequently, the solution is given by on This formula is due the French mathematician Joseph Liouville Thus, is a fundamental set of solutions for . We now return to finding a second linearly independent solution for Case III . Since and is a constant, the reduction of the order formula gives on . Since we only need a second solution , the constants of integration are set to zero for convenience. Thus, forms a fundamental set of solutions. By , the general solution of is where and are arbitrary constants.   An alternative method for finding a second linearly independent solution when the characteristic polynomial has a repeated root is outlined in Exercises.      The method discussed above for finding is known as the reduction of order because the resulting differential equation for is of first order; one order less than that of the original equation .    If the known solution vanishes at some points in the interval , we can first apply the reduction of the order on a subinterval of where does not change sign, and then extend the solution to all of using a theorem on continuation of solutions (which is beyond the scope of this book). In practice, we may formally compute using and then verify that is actually well-defined on the entire interval . For this, see .        Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives which gives Since , the auxiliary equation that we obtain is whose distinct real roots are By , the general solution is where and are arbitrary constants.      Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives which gives Since , the auxiliary equation that we obtain is whose distinct real roots are By , the general solution is where and are arbitrary constants.      Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives Then the auxiliary equation is whose complex roots are Substituting and in , the general solution is where and are arbitrary constants.      Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives which gives Since , the auxiliary equation that we obtain is whose repeated real root is By , the general solution is where and are arbitrary constants.      Given that solves on , find a second linearly independent solution using the formula for the reduction of the order.    For , we have Also, the given solution vanishes at the points  Therefore, we restrict to an interval not containing these points. For example, take Applying the formula , a second solution is given by on By scaling, we redefine on Since can be extended by the same formula to all of and for all in it follows that and are linearly independent on     Techniques for finding fundamental sets of solutions for homogeneous linear equations with variable coefficients are discussed in . In this section, we will only discuss the Cauchy–Euler equations of the form where and are real constants. The method uses as a trial solution, with to be determined from the auxiliary equation whose roots are real and distinct, complex, or repeated according as We next discuss three examples, one for each case.    Find the general solution of the Cauchy-Euler equation     Take as a trial solution, where is a number to be determined. Differentiating twice with respect to and substituting into the differential equation, we obtain for all in an interval so the auxiliary equation is with roots Let Obviously, and From the two options and let us take Then and are solutions on and their Wronskian for all in since . Thus is a fundamental set of solutions, and therefore the general solution of the Cauchy-Euler equation is on where and are arbitrary constants.      Solve the Cauchy–Euler equation     Let be a trial solution. Then Substituting into the differential equation gives Then the auxiliary equation is whose solutions are   For complex numbers , we have Let and It is routine to verify that and are linearly independent solutions on Then the general solution of the Cauchy–Euler equation is where and are arbitrary constants.      Solve the Cauchy–Euler equation     Let be a trial solution. Then Substituting into the differential equation yields Then the auxiliary equation is Its solutions are We thus have one solution as By the reduction of the order formula , a second linearly independent solution is given by Hence the general solution of the Cauchy-Euler equation is where and are arbitrary constants.       Verify that the indicated solution set for each differential equation below is linearly independent on the specified interval by computing Wronskian of the solutions (see ).    ,      ,      ,      ,      ,      ,      ,      ,      ,                    Find the general solution of each differential equation below (see ).                                              Find the general solution of each of the following Cauchy-Euler differential equations (see ).                                    Find the solution of each of the following initial value problems:      (Hint: See for the general solution.)       (Hint: See for the general solution.)       (Hint: See for the general solution.)       (Hint: See for the general solution.)       Solve the following initial value problems by using the general solutions of the related equations obtained in and .                                                                  Suppose that the characteristic polynomial of the differential equation where are constants, has a repeated root Then is a solution of the differential equation. To find a second linearly independent solution, proceed as follows.   Let with parameter . Show that     Differentiate both sides of the equation in with respect to to obtain     Using , conclude that is also a solution.    Show that and are linearly independent on .       Let be a known solution of where and are continuous functions on an interval satisfying for all in . Use the Wronskian to derive Liouville’s formula as follows:   Suppose that is a solution of such that is linearly independent on Show that where is the Wronskian of and given by     Using , show that     Obtain Liouville’s formula from part .   The same steps also apply when the known solution satisfies for all in . For the general case, see (ii) of .    "
},
{
  "id": "sec-3-2-2",
  "level": "2",
  "url": "sec-3-2.html#sec-3-2-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  Understand methods of solutions for second order homogeneous linear differential equations   "
},
{
  "id": "sec-3-2-3-2",
  "level": "2",
  "url": "sec-3-2.html#sec-3-2-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " Wronskian  Abel’s formula "
},
{
  "id": "thm-wronskian-nonzero-2",
  "level": "2",
  "url": "sec-3-2.html#thm-wronskian-nonzero-2",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "(Criterion for Linearly Indepedent Solutions).",
  "body": " (Criterion for Linearly Indepedent Solutions)   Two solutions and of where and are continuous functions on an interval are linearly independent on if and only if for all in    "
},
{
  "id": "sec-3-2-3-5",
  "level": "2",
  "url": "sec-3-2.html#sec-3-2-3-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let and be linearly independent solutions of on . Suppose, for a contradiction, that there is a point in such that Let and be constants. Then the linear system has a solution not both zero because the determinant of the coefficient matrix is zero. Fix , not both zero, satisfying , and define the function on By and the superposition principle, is a solution on of the initial value problem The uniqueness part of Theorem  implies on that is, on Thus, and are linearly dependent on , contradicting our assumption. Hence for every in   Suppose that on By , and are linearly independent on . Note that and need not be solutions for this part of the theorem to hold.  "
},
{
  "id": "def-fundamental-set",
  "level": "2",
  "url": "sec-3-2.html#def-fundamental-set",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  Consider the second order homogeneous linear differential equation where and are continuous functions on an interval Two solutions and that are linearly independent on are said to form a  fundamental set of solutions  of the differential equation. Each of these solutions, and , is referred to as a fundamental solution.   "
},
{
  "id": "thm-existence-fundamental-solution-set",
  "level": "2",
  "url": "sec-3-2.html#thm-existence-fundamental-solution-set",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": "  Consider the second order homogeneous linear differential equation where and are continuous functions on an interval Then there exist two functions and on that form a fundamental set of solutions for .   "
},
{
  "id": "subsec-existence-of-fundamental-sets-of-solutions-5",
  "level": "2",
  "url": "sec-3-2.html#subsec-existence-of-fundamental-sets-of-solutions-5",
  "type": "Proof",
  "number": "3.2.1.1",
  "title": "",
  "body": " By , there exists a unique solutions of the initial value problem and a unique of the initial value problem The two solutions and are linearly independent on In fact, let be constants such that for all in Since is in we have which implies . We then only have for all in Differentiating yields for all in Since we must have Thus, forms a fundamental set of solutions for on   Let be a fundamental set of solutions of on the interval where both and are continuous. Denote by the Wronskian of and . Let be a point in Since and are linearly independent on we have Then the Wronskian of and is Obviously, Hence we have Thus, the solutions in a fundamental set can be scaled so that the Wronskian of the scaled solutions is where is a fixed point in   "
},
{
  "id": "eg-wronskian-1",
  "level": "2",
  "url": "sec-3-2.html#eg-wronskian-1",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Find the Wronskian of a fundamental set of solutions of each of the following differential equations.                       (i) Take in There is a fundamental set of solutions whose Wronskian is  (ii) Take in There is a fundamental set of solutions whose Wronskian is  (iii) Take in There is a fundamental set of solutions whose Wronskian is    "
},
{
  "id": "thm-general-solution",
  "level": "2",
  "url": "sec-3-2.html#thm-general-solution",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "",
  "body": "  Let form a fundamental set of solutions of the second order homogeneous linear differential equation where and are continuous functions on an interval Then the functions of the form are solutions on for any constants and . Moreover, every solution of is of form for some constants and .   "
},
{
  "id": "subsec-existence-of-fundamental-sets-of-solutions-9",
  "level": "2",
  "url": "sec-3-2.html#subsec-existence-of-fundamental-sets-of-solutions-9",
  "type": "Proof",
  "number": "3.2.1.2",
  "title": "",
  "body": " For any and constants, the implies that is a solution of on   To show that every solution of is of this form , let be a solution of on and be in Denote by and the constants and , respectively. Then solves the initial value problem On the other hand, let and be constants to be determined so that satisfies Then Since is a linearly independent set of solutions, implies and therefore, by the Cramer’s rule, we find the unique values of and given by With these values of and , the function solves the same initial value problem as . By the uniqueness part of Theorem  , we conclude that on   "
},
{
  "id": "subsec-construction-fundamental-solutions-3",
  "level": "2",
  "url": "sec-3-2.html#subsec-construction-fundamental-solutions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " auxiliary   characteristic )  characteristic polynomial  roots  distinct real   complex   repeated  "
},
{
  "id": "case-repeated-root-3",
  "level": "2",
  "url": "sec-3-2.html#case-repeated-root-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " reduction of order  "
},
{
  "id": "case-repeated-root-5",
  "level": "2",
  "url": "sec-3-2.html#case-repeated-root-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case III "
},
{
  "id": "subsec-construction-fundamental-solutions-8",
  "level": "2",
  "url": "sec-3-2.html#subsec-construction-fundamental-solutions-8",
  "type": "Remark",
  "number": "3.2.6",
  "title": "",
  "body": "    The method discussed above for finding is known as the reduction of order because the resulting differential equation for is of first order; one order less than that of the original equation .    If the known solution vanishes at some points in the interval , we can first apply the reduction of the order on a subinterval of where does not change sign, and then extend the solution to all of using a theorem on continuation of solutions (which is beyond the scope of this book). In practice, we may formally compute using and then verify that is actually well-defined on the entire interval . For this, see .     "
},
{
  "id": "eg-general-solution-1",
  "level": "2",
  "url": "sec-3-2.html#eg-general-solution-1",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives which gives Since , the auxiliary equation that we obtain is whose distinct real roots are By , the general solution is where and are arbitrary constants.   "
},
{
  "id": "eg-general-solution-2",
  "level": "2",
  "url": "sec-3-2.html#eg-general-solution-2",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives which gives Since , the auxiliary equation that we obtain is whose distinct real roots are By , the general solution is where and are arbitrary constants.   "
},
{
  "id": "eg-general-solution-3",
  "level": "2",
  "url": "sec-3-2.html#eg-general-solution-3",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives Then the auxiliary equation is whose complex roots are Substituting and in , the general solution is where and are arbitrary constants.   "
},
{
  "id": "eg-general-solution-4",
  "level": "2",
  "url": "sec-3-2.html#eg-general-solution-4",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": "  Find the general solution of     Assume a solution of the form . Then and . Substituting into the differential equation gives which gives Since , the auxiliary equation that we obtain is whose repeated real root is By , the general solution is where and are arbitrary constants.   "
},
{
  "id": "eg-order-reduction",
  "level": "2",
  "url": "sec-3-2.html#eg-order-reduction",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": "  Given that solves on , find a second linearly independent solution using the formula for the reduction of the order.    For , we have Also, the given solution vanishes at the points  Therefore, we restrict to an interval not containing these points. For example, take Applying the formula , a second solution is given by on By scaling, we redefine on Since can be extended by the same formula to all of and for all in it follows that and are linearly independent on    "
},
{
  "id": "subsec-construction-fundamental-solutions-14",
  "level": "2",
  "url": "sec-3-2.html#subsec-construction-fundamental-solutions-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy–Euler "
},
{
  "id": "eg-Cauchy-Euler",
  "level": "2",
  "url": "sec-3-2.html#eg-Cauchy-Euler",
  "type": "Example",
  "number": "3.2.12",
  "title": "",
  "body": "  Find the general solution of the Cauchy-Euler equation     Take as a trial solution, where is a number to be determined. Differentiating twice with respect to and substituting into the differential equation, we obtain for all in an interval so the auxiliary equation is with roots Let Obviously, and From the two options and let us take Then and are solutions on and their Wronskian for all in since . Thus is a fundamental set of solutions, and therefore the general solution of the Cauchy-Euler equation is on where and are arbitrary constants.   "
},
{
  "id": "eg-Cauchy-Euler-complex",
  "level": "2",
  "url": "sec-3-2.html#eg-Cauchy-Euler-complex",
  "type": "Example",
  "number": "3.2.13",
  "title": "",
  "body": "  Solve the Cauchy–Euler equation     Let be a trial solution. Then Substituting into the differential equation gives Then the auxiliary equation is whose solutions are   For complex numbers , we have Let and It is routine to verify that and are linearly independent solutions on Then the general solution of the Cauchy–Euler equation is where and are arbitrary constants.   "
},
{
  "id": "eg-Cauchy-Euler-repeated-roots",
  "level": "2",
  "url": "sec-3-2.html#eg-Cauchy-Euler-repeated-roots",
  "type": "Example",
  "number": "3.2.14",
  "title": "",
  "body": "  Solve the Cauchy–Euler equation     Let be a trial solution. Then Substituting into the differential equation yields Then the auxiliary equation is Its solutions are We thus have one solution as By the reduction of the order formula , a second linearly independent solution is given by Hence the general solution of the Cauchy-Euler equation is where and are arbitrary constants.   "
},
{
  "id": "ex-sec-second-order-homogeneous-1",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-1",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": " Verify that the indicated solution set for each differential equation below is linearly independent on the specified interval by computing Wronskian of the solutions (see ).    ,      ,      ,      ,      ,      ,      ,      ,      ,                  "
},
{
  "id": "ex-sec-second-order-homogeneous-2",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-2",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": " Find the general solution of each differential equation below (see ).                                            "
},
{
  "id": "ex-sec-second-order-homogeneous-3",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-3",
  "type": "Exercise",
  "number": "3.2.3.3",
  "title": "",
  "body": " Find the general solution of each of the following Cauchy-Euler differential equations (see ).                                  "
},
{
  "id": "ex-sec-second-order-homogeneous-4",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-4",
  "type": "Exercise",
  "number": "3.2.3.4",
  "title": "",
  "body": " Find the solution of each of the following initial value problems:      (Hint: See for the general solution.)       (Hint: See for the general solution.)       (Hint: See for the general solution.)       (Hint: See for the general solution.)     "
},
{
  "id": "ex-sec-second-order-homogeneous-5",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-5",
  "type": "Exercise",
  "number": "3.2.3.5",
  "title": "",
  "body": " Solve the following initial value problems by using the general solutions of the related equations obtained in and .                                                                "
},
{
  "id": "ex-sec-second-order-homogeneous-6",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-6",
  "type": "Exercise",
  "number": "3.2.3.6",
  "title": "",
  "body": " Suppose that the characteristic polynomial of the differential equation where are constants, has a repeated root Then is a solution of the differential equation. To find a second linearly independent solution, proceed as follows.   Let with parameter . Show that     Differentiate both sides of the equation in with respect to to obtain     Using , conclude that is also a solution.    Show that and are linearly independent on .     "
},
{
  "id": "ex-sec-second-order-homogeneous-7",
  "level": "2",
  "url": "sec-3-2.html#ex-sec-second-order-homogeneous-7",
  "type": "Exercise",
  "number": "3.2.3.7",
  "title": "",
  "body": " Let be a known solution of where and are continuous functions on an interval satisfying for all in . Use the Wronskian to derive Liouville’s formula as follows:   Suppose that is a solution of such that is linearly independent on Show that where is the Wronskian of and given by     Using , show that     Obtain Liouville’s formula from part .   The same steps also apply when the known solution satisfies for all in . For the general case, see (ii) of .  "
},
{
  "id": "sec-3-3",
  "level": "1",
  "url": "sec-3-3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Second Order Nonhomogeneous Linear Differential Equations",
  "body": " Second Order Nonhomogeneous Linear Differential Equations     Understand the structure of the general solution of second order nonhomogeneous linear differential equations.    Learn methods for solving second order nonhomogeneous linear differential equations.      In this section, we discuss methods for solving second order nonhomogeneous linear differential equations. The same ideas extend naturally to higher order equation (see ). The following is concerning how the general solutions of nonhomogeneous linear differential equations must be formatted.   (General Solution)   Consider the nonhomogeneous equation where , and are continuous functions on an interval and the associated homogeneous equation on . Let be the general solution of and be a particular solution of the nonhomogeneous equation on Then the general solution of is of the form on      Let be a particular solution of . Let be any other solution of . Then the difference is a solution of the homogeneous equation . In fact, for all in , we have Therefore, takes the form of on It follows from that is the general solution of .     provides the fundamental structure for the general solution of nonhomogeneous linear differential equations. The function in is called the  complementary function  of the general solution, and it is given by where and form a fundamental set of solutions for and and are arbitrary constants.   In practice, solving a nonhomogeneous equation begins with finding the complementary function by determining a fundamental set of solutions to the associated homogeneous equation. We then find a particular solution of the nonhomogeneous equation, and the sum of the two provides the general solution. Finding a particular solution is typically the more difficult step; we outline two procedures for finding it in this section.    Variation of Parameters  The  variation of parameters  is a systematic method for constructing a particular solution of a nonhomogeneous linear differential equation of the form where the forcing term and coefficient functions and are assumed to be continuous on an interval with on We will be working with scenarios in which is either only positive or only negative on .  To formulate the method, we put in the standard form by first dividing both sides of by to obtan and then redefining as and , respectively, and defining   Assume that is a fundamental set of solutions on for the homogeneous equation associated to the nonhomogeneous equation . Then the general solution to is for all in , where and are arbitrary constants.  To find a particular solution of the nonhomogeneous equation , the method of variation of parameters assumes a solution of the form for all in , where and are functions to be determined. The choice of reflects the name of the method: variation of parameters. The constants and in the solution of the homogeneous equation are replaced by the functions and , thereby varying the parameters in order to obtain a particular solution to . For the remainder of the discussion of the method, we suppress in all functions to minimize distractions.  Differentiating , we have and We impose the condition which is trivially satisfied when and are constant functions. The condition simplifies the expressions for and as follows: Substituting , , and for and , respectively, into gives which can be rewritten as Since and satisfy the homogeneous equation , the expressions in parentheses are zero, and therefore we obtain the system This system can be solved for and : where is the Wronskian of and By integrating, we obtain Therefore, is given by Consequently, the general solution of is    The main advantage of the method of variation of parameters over the method of undetermined coefficients is that it is applicable to all non homogeneous linear differential equations, including the equations with variable coefficients. However, the evaluation of the integrals in can become quite cumbersome even when involves only elementary functions, such as the ones treated with the method of undetermined coefficients discussed .   We illustrate the method of variation of parameters with the following initial value problem which can be readily solved using the method of undetermined coefficients.    Solve the initial value problem by variation of parameters.    The auxiliary equation for the associated homogeneous equation is which gives and so the functions form a fundamental set solutions to The Wronskian of and is We note that the given nonhomogeneous equation is in the standard form with and therefore a particular solution by the method of variation of parameters is given by Then the integration by parts with the Kronecker method (see ) gives   Kronecker method for integration by parts       In a similar manner, we also evaluate Then becomes The general solution of the nonhomogeneous differential equation is where and are arbitrary constants. Since we get We find Since we have Using , we get , so that Hence the solution to the given initial value problem is on       Method of Undetermined Coefficients  We note that variation of parameters often leads to integrals that can be quite involved and sometimes unexpectedly time-consuming even for simple forcing terms such as . For instance, to find a particular solution of one may instead guess a solution of the form (or a slightly more general form, if needed). See and below. This strategy of guessing a trial function for based on type of and determining the unknown constant coefficients in the trial function is known as the method of  undetermined coefficients  . However, a demerit of this method is that it becomes quite complicated when differential equations has variable coefficients.    Find a particular solution of by using the method of undetermined coefficients and write down the general solution.    Let be a particular solution of the equation, where is a constant to be determined. Differentiating yields Substituting these into gives i.e., an identity in This implies Therefore, is a particular solution.  To determine the complementary function of the general solution, the auxiliary equation for the associated homogeneous equation is whose roots are and Then the complementary function is given by where and are arbitrary constants. Finally, the general solution of is where and are arbitrary constants.        The method of undetermined coefficients is most effective when the forcing function is a polynomial, exponential, sine, cosine, or a linear combination of these functions.    When variation of parameters may involve complicated integrals, the method of undetermined coefficients may be a quicker alternative technique for finding particular solutions of equations with constant coefficients and simple combination of elementary functions for remarked in part (i). The method of undetermined coefficients, however, requires a well-informed guessing for , which makes it challenging to apply even when is a common function, such as or .    A particular solution of a differential equation is just one member of the family represented by its general solution, and thus infinitely many particular solutions exist. In , the guess for was relatively easy to make by observing that the equation has no first derivative term and its forcing function is       In the next example, the equation also has a first derivative term, so the trial solution used for in does not work.    Find a particular solution of and then write down the general solution.    First, we use the same trial solution as in and see what happens. Let be a particular solution, where is a constant to be determined. Differentiating yields Substituting these into would give i.e., which is not an identity in for any value of because and are linearly independent. Thus, no value of makes a valid particular solution. This occurs because is involved in the process. Therefore, we modify our trial function for and take where and are constants to be determined. Differentiating twice gives Substituting these into gives i.e., an identity in Since and are linearly independent, we obtain Solving these equations for and yields and Thus, is a particular solution.  To determine the complementary function of the general solution of , the auxiliary equation for the associated homogeneous equation is which has a repeated root Then the complementary function is given by where and are arbitrary constants. Hence the general solution of is where and are arbitrary constants.    In the previous two examples, we chose trial solutions before finding the complementary function without any difficulty. In general, however, a trial solution may include terms that duplicate in the complementary function, which are redundant (even useless) since they satisfy the associated homogeneous equation. Therefore, it is useful to determine the complementary function first and then select a trial function for a particular solution. We will typically follow this procedure from now on.    Find the general solution of     First, we find the complementary function. The auxiliary equation for the associated homogeneous equation is which has a repeated root Then the complementary function is given by where and are arbitrary constants.  Next, we choose a trial solution for the particular solution. Since the right-hand side is , and this term appears in the complementary function, we need to multiply by . Thus, we take where is a constant to be determined. Differentiating twice gives Substituting these into gives This yields Therefore, and Hence the general solution is where and are arbitrary constants.      Find the general solution of     The auxiliary equation of the associated homogeneous equation is whose complex roots are Therefore, the complementary function of the general solution of the nonhomogeneous equitation is where and arbitrary constants. If was not known in advance, we might initially guess with and as undetermined coefficients. However, this form of duplicates and it cannot satisfy the nonhomogeneous equation. A point of action is to modify to This will work! Let us proceed to determine and Differentiating gives Substituting these into the nonhomogeneous equation yields For this to be an identity in we must have so is a particular solution of , and therefore its general solution is where and arbitrary constants.    When the forcing function can be decomposed into a sum of several forcing functions, then the sum of particular solutions with these individual forcing functions yields a particular solution of the original equation. The following theorem addresses this property.    Let and be continuous on an interval Suppose is a solution of for each Then the function is a solution of on      Define the linear differential operator on the class of -times differentiable functions by Since each satisfies , we have Then the linearity of the differential operator implies This shows that the function is a solution of on      Find first a particular solution and then the general solution of     The auxiliary equation of the associated homogeneous equation is whose complex roots are Therefore, the complementary function of the general solution of is where and are arbitrary constants.  To find a particular solution of , we split the forcing term into four simpler terms: In view of , we find particular solutions and then add them together.  Since in is a solution of the homogeneous equation, we take and find , . Thus,   For we take and find , Thus,   For , we try the quadratic and find , , Thus,   For , we take   and find Thus,   By , a particular solution of is given by   Hence the general solution of is where and are arbitrary constants.     Some Basic Trial Particular Solutions   In principle, the method of undetermined coefficients can always be employed; however, it requires an educated guess for particular trial solution . summarizes the basic form of a trial particular solution for a given forcing function when the forcing function is a polynomial, exponential, sine, cosine, or a linear combination of these functions, provided no term in a trial duplicates any term in the complementary function . If a term in a trial duplicates a term in , then we modify by multiplying it by , where is the smallest integer such that no term in the modified duplicates a term in . These ideas also apply to higher order linear equations.   Basic trial particular solutions        Basic trial particular solution                                                                                  In , the general polynomial is of degree with known coefficients and  are general polynomials of degree with undetermined coefficients. Also, , , are known constants, and and are undetermined constants.    Method of Operator Factorization  In this subsection, we discuss yet another method for finding particular solutions of a second order nonhomogeneous linear equations of the form where are continuous on some interval . For simplicity, we will restrict our attention to equations with constant coefficients and include only a few examples involving variable coefficients. The method extends naturally to higher-order linear equations, which we will briefly discuss in .  We let denote the differential operator defined by Higher order differential operators are denoted by integer powers of For example, and so forth. The differential operator of order is the identity operator denoted by and defined by With these notations, the second order equation can be written as or more concisely, where denotes the corresponding second order differential operator.  To introduce the operator method, we begin by considering the first order linear equation where and are continuous on an interval The equation in operator notation can be written as Formally, a solution may be expressed as Since a solution of is given by where is an arbitrary constant. A particular solution (with ) is given by In particular, if a constant, then the formula takes the form   We next study in the case where and are constants. When formally substituting with in we get which is the characteristic polynomial for the homogeneous equation If the polynomial factors as where may be real or complex, then the operator factors correspondingly as Thus, can be written a composition of two first order differential operators. Moreover, we find Since and it follows that and hence the factors commute. A particular solution of is expressed formally by In this situation, a solution of can be written formally as and it can be obtained by applying successively to these two first order operators.  Thus, the method of operators is based on the following idea: if we can factor the differential operator into a product of two first order operators, say then we can solve the equation by solving two first order equations in succession. We will illustrate this method with several examples. These techniques extend naturally to higher order linear equations.  The following example illustrates these techniques.     Find the general solution of     The equation in the operator form is where By , a particular solution is formally given by Using and integrating by parts, we get Consequently, again by and integrating by parts, we obtain   Hence the general solution of the nonhomogeneous equation is where and are arbitrary constants.    The formula can sometimes be more conveniently used using partial fraction decomposition: with the constants and to be evaluated. We can then evaluate the individual terms by using . Let us revisit with this technique.    Find a particular solution of     In , we have Suppose and are constants for which Then we find and In view of , we have which, by and integration by parts, yields     The partial fraction decomposition method employed in works naturally for higher order equations as well.  The next example shows how we deal with the case when certain factor is repeated.    Find a particular solution of     The equation in the operator form is where By , a particular solution is formally given by By , we have Then, by , we obtain     Whenever contains a factor of the form a more convenient method exists. To discuss this, suppose for some continuous function Suppose  and real or complex constants. Then and Thus, we have We also have a similar property of the inverse operator; namely, To see this, using , we have which yields .  The formulas and are called the  exponential shifting properties  of and its inverse operator, respectively. The next example provides an application of the exponential shifting properties.    Find a particular solution of by using the exponential shifting properties.    We can write By the exponential shifting property of the inverse operator, we have Since we have By using partial fraction decomposition and then applying and integration by parts, we get     When the coefficient functions and are variable, the factors of generally do not commute, as illustrated in .     Find a particular solution of     The equation in the operator form is where By inspection, may be factored as or and so which one is it? Direct computation shows and Thus, we only have Then turns into Put Then we have which is a first order linear equation in In view of , a particular solution of this equation is given by The constant of integration is chosen so as to simplify the integral below. Using this for in we obtain By , a particular solution of this equation is given by     We note that a fundamental set of solutions for the equation in involves an integral that cannot be evaluated in terms of elementary functions. We can construct the general solution by leaving these integrals unevaluated. A sketch of this construction is outlined in .    Find the general solution of the Cauchy-Euler equation using the method of operator factorization.    In the operator notation, the equation reads By inspection, the differential operator can be factored as and this product is commutative. For the general conditions under which the product of two binomial differential operators with variable coefficients commutes, see . Then the differential equation reads Let Then the equation in reads which is linear in , that is, The solution of this equation is given formally by By , we obtain   where is an arbitrary constant. Since we have that is, the solution of which is given formally by In view of , the general solution is given by where is an arbitrary constant.       Variation of Parameters        Solve the following differential equations using the method of variation of parameters to find particular solutions.                                                                            Find the general solution of each differential (Cauchy-Euler) equation below using the variation of parameters to find particular solutions.                           Find the general solution of each differential equation below. One nontrivial solution to the associated homogeneous equation is provided.                               Show that in may be written as where are in and with , the Wronskian of and . The function is called the Green's function for .    Use the Green's function derived in to find a particular solution of     Use to express a particular solution of where is in the form The integral on the right with is called the convolution of and in the context of the Laplace transform (see in ).     Show that the solution of with the initial conditions and is     Use the following rule for differentiating under the integral sign: if then      Use the result in to obtain the solution of the differential equation in satisfying        Method of Undetermined Coefficients        Find the general solution of each of the following nonhomogeneous linear differential equations.                                                                            Let be a fixed positive constant. Find the solution of the initial value problem by following the steps below.    Find the solution of the initial value problem for     Denote by the solution obtained in . For each in evaluate the limit     Verify that the function defined by is the solution of     Obtain the solution found in part by using the method of undetermined coefficients to find a particular solution.      Solve the following initial value problems and plot the corresponding solutions using a graphing utility. Describe any differences you observe in the behavior of the two solutions.                   Method of Operator Factorization        Find a particular solution of by using the method used in .    Find a particular solution of by using the method used in .    Find a particular solution of each of the following equations by using the method used in (the exponential shifting properties).                Use the exponential shifting properties to show that the general solution of the homogeneous equation where a real constant, has with and arbitrary constants.    Find a particular solution of by using the method used in .    Determine a fundamental set of solutions of by following the steps below.    Express in operator from as     Solve to obtain a nonzero solution and verify that is indeed a solution of .    Find a function by using the Liouville reduction formula so that forms a fundamental set of solutions for .      Let be differentiable functions on an interval Prove that if and only if     Let be a continuous function on some interval Let and be differentiable functions on Prove the following general exponential shifting properties.                Use the shifting properties established in to find a particular solution of each of the following equations.                   "
},
{
  "id": "sec-3-3-2",
  "level": "2",
  "url": "sec-3-3.html#sec-3-3-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "   Understand the structure of the general solution of second order nonhomogeneous linear differential equations.    Learn methods for solving second order nonhomogeneous linear differential equations.    "
},
{
  "id": "thm-second-order-nonhomogeneous-general-solution",
  "level": "2",
  "url": "sec-3-3.html#thm-second-order-nonhomogeneous-general-solution",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "(General Solution).",
  "body": " (General Solution)   Consider the nonhomogeneous equation where , and are continuous functions on an interval and the associated homogeneous equation on . Let be the general solution of and be a particular solution of the nonhomogeneous equation on Then the general solution of is of the form on    "
},
{
  "id": "sec-3-3-3-3",
  "level": "2",
  "url": "sec-3-3.html#sec-3-3-3-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be a particular solution of . Let be any other solution of . Then the difference is a solution of the homogeneous equation . In fact, for all in , we have Therefore, takes the form of on It follows from that is the general solution of .  "
},
{
  "id": "sec-3-3-3-4",
  "level": "2",
  "url": "sec-3-3.html#sec-3-3-3-4",
  "type": "Remark",
  "number": "3.3.2",
  "title": "",
  "body": "  provides the fundamental structure for the general solution of nonhomogeneous linear differential equations. The function in is called the  complementary function  of the general solution, and it is given by where and form a fundamental set of solutions for and and are arbitrary constants.  "
},
{
  "id": "subsec-variation-parameters-2",
  "level": "2",
  "url": "sec-3-3.html#subsec-variation-parameters-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " variation of parameters  "
},
{
  "id": "re-variational-over-undertermined-coefficients",
  "level": "2",
  "url": "sec-3-3.html#re-variational-over-undertermined-coefficients",
  "type": "Remark",
  "number": "3.3.3",
  "title": "",
  "body": " The main advantage of the method of variation of parameters over the method of undetermined coefficients is that it is applicable to all non homogeneous linear differential equations, including the equations with variable coefficients. However, the evaluation of the integrals in can become quite cumbersome even when involves only elementary functions, such as the ones treated with the method of undetermined coefficients discussed .  "
},
{
  "id": "eg-variation-parameters",
  "level": "2",
  "url": "sec-3-3.html#eg-variation-parameters",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Solve the initial value problem by variation of parameters.    The auxiliary equation for the associated homogeneous equation is which gives and so the functions form a fundamental set solutions to The Wronskian of and is We note that the given nonhomogeneous equation is in the standard form with and therefore a particular solution by the method of variation of parameters is given by Then the integration by parts with the Kronecker method (see ) gives   Kronecker method for integration by parts       In a similar manner, we also evaluate Then becomes The general solution of the nonhomogeneous differential equation is where and are arbitrary constants. Since we get We find Since we have Using , we get , so that Hence the solution to the given initial value problem is on    "
},
{
  "id": "subsec-undetermined-coefficients-2",
  "level": "2",
  "url": "sec-3-3.html#subsec-undetermined-coefficients-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " undetermined coefficients  "
},
{
  "id": "example-udc-1",
  "level": "2",
  "url": "sec-3-3.html#example-udc-1",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Find a particular solution of by using the method of undetermined coefficients and write down the general solution.    Let be a particular solution of the equation, where is a constant to be determined. Differentiating yields Substituting these into gives i.e., an identity in This implies Therefore, is a particular solution.  To determine the complementary function of the general solution, the auxiliary equation for the associated homogeneous equation is whose roots are and Then the complementary function is given by where and are arbitrary constants. Finally, the general solution of is where and are arbitrary constants.   "
},
{
  "id": "subsec-undetermined-coefficients-4",
  "level": "2",
  "url": "sec-3-3.html#subsec-undetermined-coefficients-4",
  "type": "Remark",
  "number": "3.3.7",
  "title": "",
  "body": "    The method of undetermined coefficients is most effective when the forcing function is a polynomial, exponential, sine, cosine, or a linear combination of these functions.    When variation of parameters may involve complicated integrals, the method of undetermined coefficients may be a quicker alternative technique for finding particular solutions of equations with constant coefficients and simple combination of elementary functions for remarked in part (i). The method of undetermined coefficients, however, requires a well-informed guessing for , which makes it challenging to apply even when is a common function, such as or .    A particular solution of a differential equation is just one member of the family represented by its general solution, and thus infinitely many particular solutions exist. In , the guess for was relatively easy to make by observing that the equation has no first derivative term and its forcing function is      "
},
{
  "id": "example-udc-2",
  "level": "2",
  "url": "sec-3-3.html#example-udc-2",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": "  Find a particular solution of and then write down the general solution.    First, we use the same trial solution as in and see what happens. Let be a particular solution, where is a constant to be determined. Differentiating yields Substituting these into would give i.e., which is not an identity in for any value of because and are linearly independent. Thus, no value of makes a valid particular solution. This occurs because is involved in the process. Therefore, we modify our trial function for and take where and are constants to be determined. Differentiating twice gives Substituting these into gives i.e., an identity in Since and are linearly independent, we obtain Solving these equations for and yields and Thus, is a particular solution.  To determine the complementary function of the general solution of , the auxiliary equation for the associated homogeneous equation is which has a repeated root Then the complementary function is given by where and are arbitrary constants. Hence the general solution of is where and are arbitrary constants.   "
},
{
  "id": "example-udc-3",
  "level": "2",
  "url": "sec-3-3.html#example-udc-3",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": "  Find the general solution of     First, we find the complementary function. The auxiliary equation for the associated homogeneous equation is which has a repeated root Then the complementary function is given by where and are arbitrary constants.  Next, we choose a trial solution for the particular solution. Since the right-hand side is , and this term appears in the complementary function, we need to multiply by . Thus, we take where is a constant to be determined. Differentiating twice gives Substituting these into gives This yields Therefore, and Hence the general solution is where and are arbitrary constants.   "
},
{
  "id": "example-udc-4",
  "level": "2",
  "url": "sec-3-3.html#example-udc-4",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": "  Find the general solution of     The auxiliary equation of the associated homogeneous equation is whose complex roots are Therefore, the complementary function of the general solution of the nonhomogeneous equitation is where and arbitrary constants. If was not known in advance, we might initially guess with and as undetermined coefficients. However, this form of duplicates and it cannot satisfy the nonhomogeneous equation. A point of action is to modify to This will work! Let us proceed to determine and Differentiating gives Substituting these into the nonhomogeneous equation yields For this to be an identity in we must have so is a particular solution of , and therefore its general solution is where and arbitrary constants.   "
},
{
  "id": "thm-superposition-particular-solutions",
  "level": "2",
  "url": "sec-3-3.html#thm-superposition-particular-solutions",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "",
  "body": "  Let and be continuous on an interval Suppose is a solution of for each Then the function is a solution of on    "
},
{
  "id": "subsec-undetermined-coefficients-12",
  "level": "2",
  "url": "sec-3-3.html#subsec-undetermined-coefficients-12",
  "type": "Proof",
  "number": "3.3.2.1",
  "title": "",
  "body": " Define the linear differential operator on the class of -times differentiable functions by Since each satisfies , we have Then the linearity of the differential operator implies This shows that the function is a solution of on   "
},
{
  "id": "subsec-undetermined-coefficients-13",
  "level": "2",
  "url": "sec-3-3.html#subsec-undetermined-coefficients-13",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Find first a particular solution and then the general solution of     The auxiliary equation of the associated homogeneous equation is whose complex roots are Therefore, the complementary function of the general solution of is where and are arbitrary constants.  To find a particular solution of , we split the forcing term into four simpler terms: In view of , we find particular solutions and then add them together.  Since in is a solution of the homogeneous equation, we take and find , . Thus,   For we take and find , Thus,   For , we try the quadratic and find , , Thus,   For , we take   and find Thus,   By , a particular solution of is given by   Hence the general solution of is where and are arbitrary constants.   "
},
{
  "id": "table-particular-solutions",
  "level": "2",
  "url": "sec-3-3.html#table-particular-solutions",
  "type": "Table",
  "number": "3.3.13",
  "title": "Basic trial particular solutions",
  "body": " Basic trial particular solutions        Basic trial particular solution                                                                                 "
},
{
  "id": "example-operator-method-1",
  "level": "2",
  "url": "sec-3-3.html#example-operator-method-1",
  "type": "Example",
  "number": "3.3.14",
  "title": "",
  "body": "  Find the general solution of     The equation in the operator form is where By , a particular solution is formally given by Using and integrating by parts, we get Consequently, again by and integrating by parts, we obtain   Hence the general solution of the nonhomogeneous equation is where and are arbitrary constants.   "
},
{
  "id": "example-operator-method-2",
  "level": "2",
  "url": "sec-3-3.html#example-operator-method-2",
  "type": "Example",
  "number": "3.3.15",
  "title": "",
  "body": "  Find a particular solution of     In , we have Suppose and are constants for which Then we find and In view of , we have which, by and integration by parts, yields    "
},
{
  "id": "subsec-method-operators-13",
  "level": "2",
  "url": "sec-3-3.html#subsec-method-operators-13",
  "type": "Example",
  "number": "3.3.16",
  "title": "",
  "body": "  Find a particular solution of     The equation in the operator form is where By , a particular solution is formally given by By , we have Then, by , we obtain    "
},
{
  "id": "subsec-method-operators-15",
  "level": "2",
  "url": "sec-3-3.html#subsec-method-operators-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential shifting properties "
},
{
  "id": "example-shifting-properties",
  "level": "2",
  "url": "sec-3-3.html#example-shifting-properties",
  "type": "Example",
  "number": "3.3.17",
  "title": "",
  "body": "  Find a particular solution of by using the exponential shifting properties.    We can write By the exponential shifting property of the inverse operator, we have Since we have By using partial fraction decomposition and then applying and integration by parts, we get    "
},
{
  "id": "eg-operator-method-3",
  "level": "2",
  "url": "sec-3-3.html#eg-operator-method-3",
  "type": "Example",
  "number": "3.3.18",
  "title": "",
  "body": "  Find a particular solution of     The equation in the operator form is where By inspection, may be factored as or and so which one is it? Direct computation shows and Thus, we only have Then turns into Put Then we have which is a first order linear equation in In view of , a particular solution of this equation is given by The constant of integration is chosen so as to simplify the integral below. Using this for in we obtain By , a particular solution of this equation is given by    "
},
{
  "id": "subsec-method-operators-20",
  "level": "2",
  "url": "sec-3-3.html#subsec-method-operators-20",
  "type": "Example",
  "number": "3.3.19",
  "title": "",
  "body": "  Find the general solution of the Cauchy-Euler equation using the method of operator factorization.    In the operator notation, the equation reads By inspection, the differential operator can be factored as and this product is commutative. For the general conditions under which the product of two binomial differential operators with variable coefficients commutes, see . Then the differential equation reads Let Then the equation in reads which is linear in , that is, The solution of this equation is given formally by By , we obtain   where is an arbitrary constant. Since we have that is, the solution of which is given formally by In view of , the general solution is given by where is an arbitrary constant.   "
},
{
  "id": "exercises-nonhomogeneous-DEs-1-3",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-1-3",
  "type": "Exercise",
  "number": "3.3.4.1",
  "title": "",
  "body": " Solve the following differential equations using the method of variation of parameters to find particular solutions.                                                                          "
},
{
  "id": "exercises-nonhomogeneous-DEs-1-4",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-1-4",
  "type": "Exercise",
  "number": "3.3.4.2",
  "title": "",
  "body": " Find the general solution of each differential (Cauchy-Euler) equation below using the variation of parameters to find particular solutions.                         "
},
{
  "id": "exercises-nonhomogeneous-DEs-1-5",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-1-5",
  "type": "Exercise",
  "number": "3.3.4.3",
  "title": "",
  "body": " Find the general solution of each differential equation below. One nontrivial solution to the associated homogeneous equation is provided.                             "
},
{
  "id": "exercises-nonhomogeneous-DEs-Green-function-1",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-Green-function-1",
  "type": "Exercise",
  "number": "3.3.4.4",
  "title": "",
  "body": " Show that in may be written as where are in and with , the Wronskian of and . The function is called the Green's function for .  "
},
{
  "id": "exercises-nonhomogeneous-DEs-1-7",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-1-7",
  "type": "Exercise",
  "number": "3.3.4.5",
  "title": "",
  "body": " Use the Green's function derived in to find a particular solution of   "
},
{
  "id": "exercises-nonhomogeneous-DEs-Green-function-2",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-Green-function-2",
  "type": "Exercise",
  "number": "3.3.4.6",
  "title": "",
  "body": " Use to express a particular solution of where is in the form The integral on the right with is called the convolution of and in the context of the Laplace transform (see in ).  "
},
{
  "id": "exercises-nonhomogeneous-DEs-1-9",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-1-9",
  "type": "Exercise",
  "number": "3.3.4.7",
  "title": "",
  "body": "  Show that the solution of with the initial conditions and is     Use the following rule for differentiating under the integral sign: if then    "
},
{
  "id": "exercises-nonhomogeneous-DEs-1-10",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-1-10",
  "type": "Exercise",
  "number": "3.3.4.8",
  "title": "",
  "body": " Use the result in to obtain the solution of the differential equation in satisfying   "
},
{
  "id": "exercises-nonhomogeneous-DEs-2-3",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-2-3",
  "type": "Exercise",
  "number": "3.3.4.9",
  "title": "",
  "body": " Find the general solution of each of the following nonhomogeneous linear differential equations.                                                                          "
},
{
  "id": "exercises-nonhomogeneous-DEs-2-4",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-2-4",
  "type": "Exercise",
  "number": "3.3.4.10",
  "title": "",
  "body": " Let be a fixed positive constant. Find the solution of the initial value problem by following the steps below.    Find the solution of the initial value problem for     Denote by the solution obtained in . For each in evaluate the limit     Verify that the function defined by is the solution of     Obtain the solution found in part by using the method of undetermined coefficients to find a particular solution.    "
},
{
  "id": "exercises-nonhomogeneous-DEs-2-5",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-2-5",
  "type": "Exercise",
  "number": "3.3.4.11",
  "title": "",
  "body": " Solve the following initial value problems and plot the corresponding solutions using a graphing utility. Describe any differences you observe in the behavior of the two solutions.              "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-3",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-3",
  "type": "Exercise",
  "number": "3.3.4.12",
  "title": "",
  "body": " Find a particular solution of by using the method used in .  "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-4",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-4",
  "type": "Exercise",
  "number": "3.3.4.13",
  "title": "",
  "body": " Find a particular solution of by using the method used in .  "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-5",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-5",
  "type": "Exercise",
  "number": "3.3.4.14",
  "title": "",
  "body": " Find a particular solution of each of the following equations by using the method used in (the exponential shifting properties).              "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-6",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-6",
  "type": "Exercise",
  "number": "3.3.4.15",
  "title": "",
  "body": " Use the exponential shifting properties to show that the general solution of the homogeneous equation where a real constant, has with and arbitrary constants.  "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-7",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-7",
  "type": "Exercise",
  "number": "3.3.4.16",
  "title": "",
  "body": " Find a particular solution of by using the method used in .  "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-8",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-8",
  "type": "Exercise",
  "number": "3.3.4.17",
  "title": "",
  "body": " Determine a fundamental set of solutions of by following the steps below.    Express in operator from as     Solve to obtain a nonzero solution and verify that is indeed a solution of .    Find a function by using the Liouville reduction formula so that forms a fundamental set of solutions for .    "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-9",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-9",
  "type": "Exercise",
  "number": "3.3.4.18",
  "title": "",
  "body": " Let be differentiable functions on an interval Prove that if and only if   "
},
{
  "id": "exercises-shifting-properties",
  "level": "2",
  "url": "sec-3-3.html#exercises-shifting-properties",
  "type": "Exercise",
  "number": "3.3.4.19",
  "title": "",
  "body": " Let be a continuous function on some interval Let and be differentiable functions on Prove the following general exponential shifting properties.              "
},
{
  "id": "exercises-nonhomogeneous-DEs-3-11",
  "level": "2",
  "url": "sec-3-3.html#exercises-nonhomogeneous-DEs-3-11",
  "type": "Exercise",
  "number": "3.3.4.20",
  "title": "",
  "body": " Use the shifting properties established in to find a particular solution of each of the following equations.                "
},
{
  "id": "sec-3-4",
  "level": "1",
  "url": "sec-3-4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Higher Order Linear Differential Equations",
  "body": " Higher Order Linear Differential Equations     Learn solution techniques for higher order linear differential equations      In this section we discuss methods for solving the order linear differential equations of the form where the coefficient functions and the forcing term are continuous on some interval     Homogeneous Equations  To find the general solution of , we first find the general solution of the associated homogeneous equation and a particular solution of . Then the general solution of the nonhomogeneous equation is given by on where is a fundamental set of solutions of and are arbitrary constants. The function also denoted by is called the  complimentary function  of the general solution of . The existence of a fundamental set of solutions for follows by arguments analogous to those used in . In fact, let be the unique solution of the initial value problem consisting of the equation subject to the initial conditions where It follows that is a fundamental solutions of (see in ).  Let be solutions of . In in , you will derive the Abel formula for the Wronskian of as   The linear independence of solutions of can be determined using their Wronskian (see ), as stated in the following theorem.    Let be solutions of on Then they are linearly independent on if and only if      The proof is similar to the proof of and is omiited.   Methods for constructing a fundamental set of solutions for vary. When we have means to find a single nonzero solution, the reduction of order discussion in can be employed to obtain additional linearly independent solutions. This method applies not only to second order homogeneous linear equations but also extends to higher order equations, as discussed in the next theorem.    Let be a solution of such that on and let be a solution of for a nonconstant function on If is a fundamental set of solutions for the equation of order in obtained by substituting into and if for then forms a fundamental set of solutions for on      We present a proof for the case The general case proceeds in a similar way, and a careful reader is encouraged to verify it, noting that it involves the use of binomial coefficients that are produced for higher order derivatives of the product function   For to be a solution of , we must have which gives Since is a solution of , we have Consequently, we obtain Letting gives which is a second order homogeneous linear equation in Suppose that is a fundamental set of solution of the second order equation and let be functions satisfying To show is a fundamental set of solutions for , let be real numbers such that for all in Since on we must have for all in Differentiating yields for all in that is, for all in The linear independence of on implies that Consequently, as well. Therefore, forms a linearly independent set of solutions of for and hence constitutes a fundamental set of solutions. ◻     Find a fundamental set of solutions for given that is a solution. Also, write down the general solution.    Let a solution of , where is a nonconstant function on Differentiating four times and substituting into the equation gives After canceling terms, we obtain which yields in Let Then we find on Integrating, we obtain where are arbitrary constants.  Take and Then forms a fundamental set of solutions for on Since we take and so that forms a fundamental set of solutions for . The general solution of the equation is where are arbitrary constants.      Nonhomogeneous Equations  To find a particular solution of by using the method of variation of parameters, we take as where are to be determined.  Differentiating successively, and to simplify calculations, imposing the conditions we obtain These equations can be solved for by using Cramer's rule as follows. We first write down the system of equations in the matrix form which can be solved for by using Cramer’s rule . In fact, we have where is the Wronskian of and is the determinant obtained by replacing the th column of by the column on the right-hand side of . We find for each and hence is then fully determined by .  As discussed in , the method of variation of parameters is quite general and works for any linear nonhomogeneous differential equation (even with variable coefficients), so long as the required integrals for make sense.    Find the general solution of by using the variation of parameters.    The homogeneous equation associated to the nonhomogeneous equation is with the auxiliary equation Then we have and therefore the functions form a fundamental set of solutions for the homogeneous equation. The general solution to is then given by where is a particular solution of the nonhomogeneous equation.  By the method of variation of parameters, we assume that is of the form where the functions are to be determined so that satisfy   The system in the matrix form is The Wronskian of is Using the co-factor expansion along the first column, we have We compute by expanding along the first column and obtain Then we have and consequently, we can take We next compute by expanding along the first column and obtain Then we have and so We can take We also compute by expanding along the first column and obtain and so We can take Consequently, is given by Hence the general solution to is where , and are arbitrary constants.       Find the general solution of each differential equation below by using variation of parameters to find a particular solution.                          Solve each differential equation below by using the provided fundamental set of solutions for the associated homogeneous equation to find a particular solution by variation of parameters.                               Find a fundamental set of solutions for each differential equation below by using the given solution for the reduction of order.          for      for      for       Following the arguments similar to the proof of , prove that the solutions of the initial value problems consisting of the equation and initial conditions are linearly independent on     Let be solutions of . Following the arguments used to derive , prove that the Wronskian is given by     "
},
{
  "id": "sec-3-4-2",
  "level": "2",
  "url": "sec-3-4.html#sec-3-4-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "   Learn solution techniques for higher order linear differential equations    "
},
{
  "id": "subsection-3-4-1-2",
  "level": "2",
  "url": "sec-3-4.html#subsection-3-4-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " complimentary function  "
},
{
  "id": "thm-wronskian-nonzero-3",
  "level": "2",
  "url": "sec-3-4.html#thm-wronskian-nonzero-3",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "",
  "body": "  Let be solutions of on Then they are linearly independent on if and only if    "
},
{
  "id": "subsection-3-4-1-6",
  "level": "2",
  "url": "sec-3-4.html#subsection-3-4-1-6",
  "type": "Proof",
  "number": "3.4.1.1",
  "title": "",
  "body": " The proof is similar to the proof of and is omiited.  "
},
{
  "id": "thm-reduction-of-order-2",
  "level": "2",
  "url": "sec-3-4.html#thm-reduction-of-order-2",
  "type": "Theorem",
  "number": "3.4.2",
  "title": "",
  "body": "  Let be a solution of such that on and let be a solution of for a nonconstant function on If is a fundamental set of solutions for the equation of order in obtained by substituting into and if for then forms a fundamental set of solutions for on    "
},
{
  "id": "subsection-3-4-1-9",
  "level": "2",
  "url": "sec-3-4.html#subsection-3-4-1-9",
  "type": "Proof",
  "number": "3.4.1.2",
  "title": "",
  "body": " We present a proof for the case The general case proceeds in a similar way, and a careful reader is encouraged to verify it, noting that it involves the use of binomial coefficients that are produced for higher order derivatives of the product function   For to be a solution of , we must have which gives Since is a solution of , we have Consequently, we obtain Letting gives which is a second order homogeneous linear equation in Suppose that is a fundamental set of solution of the second order equation and let be functions satisfying To show is a fundamental set of solutions for , let be real numbers such that for all in Since on we must have for all in Differentiating yields for all in that is, for all in The linear independence of on implies that Consequently, as well. Therefore, forms a linearly independent set of solutions of for and hence constitutes a fundamental set of solutions. ◻  "
},
{
  "id": "example-reduction-order-1",
  "level": "2",
  "url": "sec-3-4.html#example-reduction-order-1",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Find a fundamental set of solutions for given that is a solution. Also, write down the general solution.    Let a solution of , where is a nonconstant function on Differentiating four times and substituting into the equation gives After canceling terms, we obtain which yields in Let Then we find on Integrating, we obtain where are arbitrary constants.  Take and Then forms a fundamental set of solutions for on Since we take and so that forms a fundamental set of solutions for . The general solution of the equation is where are arbitrary constants.   "
},
{
  "id": "subsection-3-4-2-3",
  "level": "2",
  "url": "sec-3-4.html#subsection-3-4-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cramer’s rule "
},
{
  "id": "subsection-3-4-2-5",
  "level": "2",
  "url": "sec-3-4.html#subsection-3-4-2-5",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": "  Find the general solution of by using the variation of parameters.    The homogeneous equation associated to the nonhomogeneous equation is with the auxiliary equation Then we have and therefore the functions form a fundamental set of solutions for the homogeneous equation. The general solution to is then given by where is a particular solution of the nonhomogeneous equation.  By the method of variation of parameters, we assume that is of the form where the functions are to be determined so that satisfy   The system in the matrix form is The Wronskian of is Using the co-factor expansion along the first column, we have We compute by expanding along the first column and obtain Then we have and consequently, we can take We next compute by expanding along the first column and obtain Then we have and so We can take We also compute by expanding along the first column and obtain and so We can take Consequently, is given by Hence the general solution to is where , and are arbitrary constants.   "
},
{
  "id": "exercise-3-4-1",
  "level": "2",
  "url": "sec-3-4.html#exercise-3-4-1",
  "type": "Exercise",
  "number": "3.4.3.1",
  "title": "",
  "body": " Find the general solution of each differential equation below by using variation of parameters to find a particular solution.                        "
},
{
  "id": "exercise-3-4-2",
  "level": "2",
  "url": "sec-3-4.html#exercise-3-4-2",
  "type": "Exercise",
  "number": "3.4.3.2",
  "title": "",
  "body": " Solve each differential equation below by using the provided fundamental set of solutions for the associated homogeneous equation to find a particular solution by variation of parameters.                             "
},
{
  "id": "exercise-3-4-3",
  "level": "2",
  "url": "sec-3-4.html#exercise-3-4-3",
  "type": "Exercise",
  "number": "3.4.3.3",
  "title": "",
  "body": " Find a fundamental set of solutions for each differential equation below by using the given solution for the reduction of order.          for      for      for     "
},
{
  "id": "exercise-3-4-4",
  "level": "2",
  "url": "sec-3-4.html#exercise-3-4-4",
  "type": "Exercise",
  "number": "3.4.3.4",
  "title": "",
  "body": " Following the arguments similar to the proof of , prove that the solutions of the initial value problems consisting of the equation and initial conditions are linearly independent on   "
},
{
  "id": "exercise-3-4-5",
  "level": "2",
  "url": "sec-3-4.html#exercise-3-4-5",
  "type": "Exercise",
  "number": "3.4.3.5",
  "title": "",
  "body": " Let be solutions of . Following the arguments used to derive , prove that the Wronskian is given by   "
},
{
  "id": "sec-3-5",
  "level": "1",
  "url": "sec-3-5.html",
  "type": "Section",
  "number": "3.5",
  "title": "Applications",
  "body": " Applications     Be able to apply methods of solutions from previous sections to some elementary problems in applications.      In this section we will study three elementary examples of applications where the methods from previous sections can be effectively used.    Spring-Mass System  A common example of a second order linear differential equation with constant coefficients arises in modeling the motion of a mass attached to a spring whose other end is fixed to a support. Let us consider a spring suspended vertically from a fixed ceiling (rigid support) with the mass attached to its lower end, as illustrated in .   A mass-spring system showing unstretched, equilibrium, motion, and coordinate-axis.      Let denote the natural (unstretched) length of the spring, and let be the amount by which the spring stretches when the mass is attached and allowed to hang in equilibrium under gravity. We assume that the motion of the mass is restricted to the vertical line through the point of the equilibrium of the mass. To take this vertical line (see (d)) as the coordinate axis, we take the equilibrium point as the origin and assign the vertically downward direction as the positive direction.  Denote by the displacement of the mass at time from its equilibrium position (the origin). In addition to the restoring force of the spring and gravitational force , assume that the mass is acted upon by a damping force as well as an external force See (c) for wall friction as an example of a damping force. Thus, we have According to Newton's second law, we then have  How do we model the spring force   Since a spring that is stretched or compressed tends to return to its natural length, the spring force wants to pull the mass toward its equilibrium position. For an ideal spring—one made of a homogeneous material with uniform coiling—Robert Hooke, a 17th-century English physicist, established that the restoring force required to stretch or compress the spring (without damaging it) is directly proportional to the resulting displacement. For a spring made up of a heterogeneous material and with nonuniform coiling, the restoring force may be modeled by a nonlinear function of the displacement. For example, with a fixed number in and a fixed real number. This means that where is a fixed positive constant, called the spring constant which measures the stiffness of the spring. The negative means that the restoring force is directed toward the origin.  One may ask: how do we practically calculate of a spring? The simplest way to calculate is to simply suspend the spring from a support with the mass attached to its other end and observe the stretch the spring experiences for its equilibrium under gravity. Since the mass is at rest, the net force acting on the mass is zero, that is, which yields and so    How do we model   It is intuitive that the damping force (or drag) increases as the speed of the mass increases. Hence, the simplest way to model the damping force is to assume that it is directly proportional to the velocity. For a medium that resists the motion of the mass depending on a power of the speed, the damping force may be modeled by a nonlinear function of the velocity. For example, with a fixed number in and a fixed real number. This means that where is the constant of proportionality, called the damping coefficient of the medium offering the resistance to the motion of the mass.  Using and in , we obtain   which, in view of , yields This is a second order linear differential equation with constant coefficient, and it can be solved using the methods from the previous sections. For example, the method of undetermined coefficients or variation of parameters can be used.  We now examine several interesting and special cases of before discussing the general form.   I. Free Undamped Motion ( )  When (no damping) and (no external forces), the mass-spring system is said to have a free undamped motion and the system is called a simple harmonic oscillator . The resulting differential equation for the displacement of the mass from its equilibrium position is which, with , becomes also referred to as a simple harmonic oscillator. Then the general solution of the simple harmonic oscillator is where and are arbitrary constants which can be determined when the initial conditions are provided.  The displacement described by can interpreted most effectively when it is written in the form of a single sine or cosine function. To express it in the form of a single sine function, we seek to find two constants and so that Then Since the terms in and must match, we obtain Squaring and adding these equations gives We take It is possible that , in which case, we have for all , the trivial solution, and this means that the mass is at rest in the equilibrium position for all Therefore the only interesting case is when If then We have Also, note that can be written as It is now clear from that the mass oscillates about the origin with the amplitude which is the maximum displacement from the equilibrium position. The time period for one complete oscillation is and therefore the number is the circular frequency of the oscillations, that is, the number of cycles per unit units of time.    A 2-pound mass stretches a spring 6 inches. At time , the mass is released from a position 8 inches below equilibrium with an initial upward velocity of ft\/s.     Find the equation of motion in both the forms and .    Graph the velocity versus the displacement.          Let denote in feet the displacement of the mass from the equilibrium position measured positively in the vertically downward direction. We have We have and the spring constant The differential equation of motion is which becomes and therefore with the initial condition The general solution of the differential equation is   Applying the initial conditions gives   Also, since and we obtain that is, Hence the equation of the motion is which is of the form . Using the method discussed for to find the equation of the motion in the amplitude-phase, we compute and and therefore   Its graph is shown in .    The graph of         We find Then for all . This takes the form for all and is an ellipse in the -plane as shown in . The graph is called the orbit of the simple harmonic oscillator and visualizes the oscillatory motion.   The graph of             II. Free Damped Motion ( )  When (with damping) and (no external forces), the mass-spring system is said to have a free damped motion . The resulting differential equation for the motion of the mass is which, with and , becomes and the differential equation is known as a free damped spring–mass system. Its general solution depends on the relative strengths of the damping and spring forces. When the spring force dominates, the motion is oscillatory with amplitude decaying to zero as and when the damping force dominates, the motion is non-oscillatory. There exists a threshold value of the damping coefficient—called the critical damping—above which no oscillations occurs, and below which the system exhibits damped oscillations whose amplitude decays to zero as . To analyze this, we start with the auxiliary equation for ; namely, with is a trial solution. It then follows that   There are three significantly different cases of a free damped motion.      Underdamped Motion : When  yields so that the general solution of is where and are arbitrary constants are determined when the initial conditions are provided. The displacement is periodic with the period Moreover, since we observe that It then follows that   With regard to the velocity of the mass, we find Again, we observe that Hence, the mass approaches the equilibrium position while oscillating with the circular frequency and the velocity approaches zero as goes to   Since and  is equivalent to We conclude that when the damping force is too weak to counteract a strong spring force, the mass undergoes damped oscillations: the amplitude gradually decreases to zero. In this case, the mass-spring system is said to be underdamped .     Overdamped Motion : When  yields so that the general solution of is where and are arbitrary constants are determined when the initial conditions are provided. Therefore is not periodic Moreover, since and , it follows that both and are negative. Consequently, we have It then follows that We can show that the mass passes through the equilibrium position at most once by setting and finding the time at which this happens.  Regarding the velocity of the mass, we find   Again, we observe that We can also show that the mass reaches an extreme position at most once by setting and finding the time at which this happens. Since and  is equivalent to We conclude that when the spring force is too weak to counteract a strong damping damping force, the mass approaches the equilibrium position with no oscillation and its velocity approaches zero, by changing its sign at most once, as goes to . In this case, the mass-spring system is said to be overdamped.      Critically Damped Motion : When , yields so that the general solution of is where and are arbitrary constants which can be determined when the initial conditions are known. The velocity of the mass is given by Since we find and as These imply that As note earlier in the case of an overdamped motion, the mass in this case can also pass thorough the equilibrium at most once and can reach an extreme position at most once while its velocity changes its sign. As goes to the mass approaches its equilibrium position and its velocity also tends to zero.  Since and  is equivalent to It follows from the case of underdamped motion that when the damping coefficient is even slightly less than the mass undergoes an oscillatory motion. The spring-mass system with the smallest damping coefficient that maintains a nonoscillatory motion is to be critically damped .       III. Forced Undamped Motion ( )  When (no damping) and (with external force), the spring-mass system is governed by the differential equation which, with and becomes   The nonhomogeneous equation can be solved by using the methods of previous sections. The general solution is of the form where and are arbitrary constants and is a particular solution of . Recall that is the general solution of the simple harmonic oscillator associated with .    A -kilogram mass attached to the end of a vertically hanging spring causes the spring to stretch centimeters. At time , the spring-mass system is set into motion by an external force , where is measured in newtons and is positive in the downward direction, and time is measured in seconds. Determine the equation of motion and estimate the maximum excursion of the mass from its equilibrium position.    We let denote the displacement of the mass from the equilibrium position measured positively in the vertically downward direction.  We have For the mass in equilibrium, we have , and so The natural frequency of the system is The differential equation of motion is therefore or equivalently, The general solution of is where and are arbitrary constants. We find a particular solution of by variation of parameters. Let be a particular solution of , where and are to be determined. We find that Substituting for and for into yields that is, Equating the coefficients of the like terms, we have and , that is, and Thus, we have The general solution of is where and are arbitrary constants. The initial conditions for are Substituting these gives and , i.e., and Thus, we have The graph of the solution is shown in . Using the critical numbers and second derivative test, we can verify that the maximum occurs at The maximum value is   The graph of          In , the frequency of the external source is which is not equal to or near the natural frequency    Resonance: An important aspect of analyzing undamped forced spring-mass systems is understanding how large (in absolute values) the values of can become when is sinusoidal. If the amplitude of grows without bound, the system is said to be in resonance . In practical applications, resonance may be undesirable because it can lead to excessive energy buildup and potential system failure. Since the system is undamped, the only way energy can dissipate from the system is by the nature of the source term However, it is possible that the energy buildup can happen in the system even when is sign-changing. The following example demonstrates how resonance occurs.   With the external force in replaced with , determine the equation of motion, analyze the amplitude of the resulting motion, and verify that the system exhibits resonance.    Similarly to the solution in , the initial value problem for the current example is Recall from that the natural frequency of the system is We note here that the frequency of the external force matches the natural frequency The general solution of is where and are arbitrary constants. We find a particular solution of by variation of parameters. Let where and satisfy Solving this system gives and Integrating yields Hence, The general solution is  and are constants to be determined so that Substituting these gives and , i.e., Thus, we have It is evident that the amplitude of is given by which shows that grows without bound as Hence, the system exhibits resonance in this case, where the forcing frequency coincides the natural frequency-illustrating the classical example of resonance in an undamped forced spring-mass system. The plots of the solution and amplitude are shown in .  The graph of and its amplitude         Electrical Circuits  An RLC circuit is another common physical application of second-order linear differential equations.   "
},
{
  "id": "sec-3-5-2",
  "level": "2",
  "url": "sec-3-5.html#sec-3-5-2",
  "type": "Objectives",
  "number": "3.5",
  "title": "",
  "body": "   Be able to apply methods of solutions from previous sections to some elementary problems in applications.    "
},
{
  "id": "fig-spring-mass",
  "level": "2",
  "url": "sec-3-5.html#fig-spring-mass",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " A mass-spring system showing unstretched, equilibrium, motion, and coordinate-axis.     "
},
{
  "id": "free-undamped-motion-4",
  "level": "2",
  "url": "sec-3-5.html#free-undamped-motion-4",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": "  A 2-pound mass stretches a spring 6 inches. At time , the mass is released from a position 8 inches below equilibrium with an initial upward velocity of ft\/s.     Find the equation of motion in both the forms and .    Graph the velocity versus the displacement.          Let denote in feet the displacement of the mass from the equilibrium position measured positively in the vertically downward direction. We have We have and the spring constant The differential equation of motion is which becomes and therefore with the initial condition The general solution of the differential equation is   Applying the initial conditions gives   Also, since and we obtain that is, Hence the equation of the motion is which is of the form . Using the method discussed for to find the equation of the motion in the amplitude-phase, we compute and and therefore   Its graph is shown in .    The graph of         We find Then for all . This takes the form for all and is an ellipse in the -plane as shown in . The graph is called the orbit of the simple harmonic oscillator and visualizes the oscillatory motion.   The graph of          "
},
{
  "id": "free-damped-motion-4",
  "level": "2",
  "url": "sec-3-5.html#free-damped-motion-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Underdamped Motion : underdamped Overdamped Motion : overdamped. Critically Damped Motion : critically damped "
},
{
  "id": "example-undamped-forced-system",
  "level": "2",
  "url": "sec-3-5.html#example-undamped-forced-system",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": "  A -kilogram mass attached to the end of a vertically hanging spring causes the spring to stretch centimeters. At time , the spring-mass system is set into motion by an external force , where is measured in newtons and is positive in the downward direction, and time is measured in seconds. Determine the equation of motion and estimate the maximum excursion of the mass from its equilibrium position.    We let denote the displacement of the mass from the equilibrium position measured positively in the vertically downward direction.  We have For the mass in equilibrium, we have , and so The natural frequency of the system is The differential equation of motion is therefore or equivalently, The general solution of is where and are arbitrary constants. We find a particular solution of by variation of parameters. Let be a particular solution of , where and are to be determined. We find that Substituting for and for into yields that is, Equating the coefficients of the like terms, we have and , that is, and Thus, we have The general solution of is where and are arbitrary constants. The initial conditions for are Substituting these gives and , i.e., and Thus, we have The graph of the solution is shown in . Using the critical numbers and second derivative test, we can verify that the maximum occurs at The maximum value is   The graph of        "
},
{
  "id": "forced-damped-motion-6",
  "level": "2",
  "url": "sec-3-5.html#forced-damped-motion-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Resonance: resonance "
},
{
  "id": "forced-damped-motion-8",
  "level": "2",
  "url": "sec-3-5.html#forced-damped-motion-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resonance "
},
{
  "id": "sec-3-6",
  "level": "1",
  "url": "sec-3-6.html",
  "type": "Section",
  "number": "3.6",
  "title": "Change of Variables",
  "body": " Change of Variables     Understand the change of variables techniques.      Something about forced oscillations and resonance goes here yes.    something  soemthing   "
},
{
  "id": "sec-3-6-2",
  "level": "2",
  "url": "sec-3-6.html#sec-3-6-2",
  "type": "Objectives",
  "number": "3.6",
  "title": "",
  "body": "   Understand the change of variables techniques.    "
},
{
  "id": "ch-4",
  "level": "1",
  "url": "ch-4.html",
  "type": "Chapter",
  "number": "4",
  "title": "Method of Series Solutions",
  "body": " Method of Series Solutions   Intro goes here.     "
},
{
  "id": "sec-5-1",
  "level": "1",
  "url": "sec-5-1.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Laplace Transform",
  "body": " The Laplace Transform   Consider a forced oscillator, as discussed in Section of , described by the equation where is an impulsive force. At the mass is at rest at its equilibrium position. At time , the mass experiences a sharp, brief downward impact, such as a hammer strike, modeled by an the impulsive force An impulsive force of this nature is commonly modeled by using an idealized mathematical object, called the Dirac delta  function denoted by which is characterized by the following properties:      for all ; and     for any function continuous on an open interval containing .     We note that when in (ii), we obtain . Based on the properties (i) and (ii) characterizing , it is important to recognize that is not a function in the usual sense; rather it is a typical example of generalized functions or distributions which were first developed rigorously by Sergei Sobolev in 1936 and later in 1950s by Laurent Schwartz who is known to have given the most definitive and systematic development of the theory of distributions. For an elegant introduction to distribution theory with application, the reader is referred to Zemanian A.H. Zemanian, Distribution theory and transform analysis , second edition, Dover, New York, 1987; MR0918977 .  The Dirac delta function is particularly useful for modeling phenomena involving instantaneous or localized effects, such as a lightning strike, a point heat explosion, or the sudden burst of dye at a specific location. Because of the properties (i) and (ii), the Dirac delta function is said to be concentrated at   Mathematically, can be interpreted as the limit of a sequence of approximating impulse functions. One such approximation is given by which represents a pulse of height and width , centered at .   The graph of .      As , this pulse becomes increasingly narrow and tall, concentrating its effect at , i.e., while maintaining a total area of 1—mirroring the property (ii) of , i.e., so that Furthermore, if is continuous from right at , then by using l'Hôpital's rule and the continuity of at from right.  By formally interchanging the limit and the integral in both and , an operation which needs justification in integration theories, we obtain and We observe in and that exhibits the properties (i) and (ii) that characterize , and therefore can be interpreted as the limit of a sequence of functions that approximate an impulsive behavior. We recognize that also does not define a function on in the classical sense because its value at is Instead, the limit is understood as a generalized function, or a distribution, because of the way it operates primarily through its action on other functions within integrals, as described by the property ii., which is motivated by .  By using the property ii., we find that for all in we have for all real numbers From this point onward, we will focus on the case where and . Under this assumption, reduces to for all real values of . This integral is known as the Laplace transform (see ) of the Dirac delta function , denoted by In particular, when we have   The main objective of this chapter is to develop a method for solving initial value problems such as in which is either discontinuous or involves the Dirac delta functions. The methods of undetermined coefficients and variation of parameters are not relevant to with because the calculus of distributions is beyond the scope of this book. In particular, we do not have a meaning of in this case.  Being motivated from with the Dirac delta function in the integrand, we first define the Laplace transform of classical functions defined on    (Laplace transform)   Let be a function. The Laplace transform of is a function , denoted commonly by , defined by for those for which the integral converges.    The symbol represents a transformation that maps an input function of the variable (usually time) to an output function of the variable (usually involving frequency when is a complex number). This action of the transformation is depicted in the figure below.   The Laplace transform as an operator mapping to .       \\mathcal {L}    f(t)    F(s)         The variable in the definition of the Laplace transform can, in general, be a complex variable; however, in the current chapter, we will restrict to a real variable.  The Laplace transform is a powerful tool for solving initial value problems for ordinary differential equations, especially those with nonhomogeneous terms that are piecewise continuous or involve the Dirac delta function. The key idea is to apply the Laplace transform to both sides of the differential equation, which converts the problem from the time domain (involving ) to the complex frequency domain (involving ). This transformation turns differentiation into algebraic manipulation, making it easier to solve for the transformed function . Once we have , we can then find the original function by applying the inverse Laplace transform to . Before we begin using Laplace transforms to solve initial value problems, we compute the Laplace transforms of several common functions that appeared in the previous chapters, such as polynomial functions, exponential functions, trigonometric functions, and some combinations of these functions. The Laplace transform of the Dirac delta function is encountered in and will be used in solving initial value problems with impulsive forcing.  By using , we compute the Laplace transforms of some common functions in the examples below.   Compute for a fixed real number    We have  for Thus, we have      Compute .   We have for Thus, we have      Compute    We have for Thus, we have      Compute for a nonnegative integer    We have Using this recursive relation, we obtain for . Thus, we have      Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have      Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have      Shifting on the -axis  Compute for each fixed real number .   By using , we have Therefore, we have     A simple but useful example of a discontinuous function is the unit step function  , also known as the Heaviside function (named in honor of the English mathematician, engineer, and physicist Oliver Heaviside (1850–1925)). It is defined on by The unit step function with the jump discontinuity at is given by The graph of the unit step function is shown in the figure below.   The graph of   `     The unit step function is used to model situations where a quantity changes abruptly at a certain point in time, such as a switch being turned on or off, or a force being applied suddenly.   Compute for a nonnegative real number    By using , we have for Thus, we have     To model situations in applications where an external force or source begins acting only after time , we analyze the effect of shifting the source function along the -axis.  Suppose the function is effective only at and after the time . In that case, we can write which is obtained by shifting the graph of to the right by units and taking the zero function to the left of . This function can be expressed in terms of the unit step function as whose graph is shown in the figure below, where the blue curve represents and the red curve represents    Shifting on the -axis       Laplace transform of a shifted function  Compute for a nonnegative real number    By , we have Thus, we have      The linearity of the Riemann integration yields the linearity of the Laplace transform operator , as stated in the following theorem.   Linearity of the Laplace transform   Let and be functions defined on such that their Laplace transforms exist for for some real number Then, for any real numbers and we have      By using the definition of the Laplace transform, we have      When does the Laplace transform exist?  An immediate question one might ask is: what sort of functions actually have Laplace transforms according to ? To answer this in the context of the Riemann integration, we note that is the limit of the definite integrals as whenever it exists, and therefore cannot have a vertical asymptote at any point . To avoid any chances for vertical asymptotes, we take to be piecewise continuous on A piecewise continuous function on is one which can have at most a finite number of jump discontinuities on each closed subinterval of . An example of a piecewise continuous function is depicted in the figure below.   A piecewise continuous function      However, the condition that be piecewise continuous on would not be sufficient for the existence of its Laplace transform. For instance, the function does not have its Laplace transform. In fact, for each fixed number , there exists such that for all and this implies that This results in for all This holds for every number , and therefore does have its Laplace transform. From this example, we observe that must control the growth property of as for the existence its Laplace transform. In particular, in addition to the piecewise continuity, if is of an exponential order as i.e., if there exist constants , and such that then, for all , we find Consequently, exists for We formalize all these ideas together in the following existence theorem.    Let be a piecewise continuous function on and of an exponential order as . Then exists.     By the piecewise continuity of on , we have for some finite number of points By the exponential order of , we have for all Thus, the limit exists for all This implies that exists for all    We are also interested in whether two different functions can have the same Laplace transform. Trivial examples of functions that have the same Laplace transform are with and defined by Note that and and for all Since and differ only at one single point in it follows, by the definition of the Laplace transform, that for This implies that is not a one-to-one function from functions of the variable to functions of the variable .    Inverse Laplace transform  As mentioned at the end of Section , the forced oscillator ( ) cannot be solved using the methods from previous chapters when is a Dirac delta function. Even if is only piecewise continuous, the earlier methods can become quite tedious to apply. The Laplace transform method provides a more efficient approach, and this method involves taking the Laplace transform of a linear differential equation and converting it into an algebraic equation. After solving the algebraic equation in the -domain for the Laplace transform of the solution function, we then apply the one-to-one property of the Laplace transform to return to the solution in the domain. Evidently, for the method to work, we need to know when is one-to-one, so that the inverse makes sense.  For continuous functions, the following theorem establishes the invertibility of the Laplace transform.   Invertibility of the Laplace transform   Let and be two piecewise continuous functions defined on such that their Laplace transforms exist for for some real number If then for all at which both and are continuous.     By the definition of the Laplace transform, we have for all Let be a point at which both and are continuous.    By , for continuous functions and satisfying for all , where is a positive number, we have for all in Consequently, is one-to-one on the class of continuous functions whose Laplace transforms exist . Thus, for every continuous function on with the Laplace transform of we have for all Here, is called the inverse Laplace transform    We recall from that for Therefore, when we speak of we mean a function of that agrees with for , and it can have any arbitrary value at In practice, we choose the function that best fits the problem at hand, but in this book, we will use unless this choice is clearly inappropriate. It is understood that any other function that differs from only at may also be used. These considerations will also be made at the points of jump discontinuity when we take the inverse Laplace transform of the Laplace transform of a piecewise continuous functions of exponential order as   In view of , may represent multiple functions when has jump discontinuities on . For most functions discussed in this chapter, it won't be much of an issue since we will be working with either continuous functions or, at worse, functions that have finite number of discontinuity, with the exception of a Dirac delta distributions which has its Laplace transform encoded in the definition itself as Since is discontinuous only at we will adopt More rigorous arguments about such ideas pertaining to Dirac delta functions exist in an area called distribution theory, which is beyond the scope of this book.  It follows that the inverse Laplace transform operator is linear, and we formalize this linearity property of in the following theorem.    The inverse Laplace transform operator is linear, that is, where and are constants and and are Laplace transforms of functions that are either piecewise continuous and of exponential order at infinity or delta functions.     By the linearity of the Laplace transform operator , we have By the one-to-one property of the Laplace transform, we conclude that         Find the Laplace transforms of the following functions on by using formulas derived in .                ( , , and are fixed real numbers.)                (Assume that the integration and summation can be interchanged.)       Find the Laplace transforms of the following piecewise continuous functions either by using the definition or by first expressing the functions as a linear combination of unit step functions and then using formulas derived in .                                    Find the Laplace transform of each of the following functions by using formulas derived in .                       Find the inverse Laplace transform of each of the following Laplace transforms.                                   "
},
{
  "id": "sec-5-1-2-1",
  "level": "2",
  "url": "sec-5-1.html#sec-5-1-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dirac delta "
},
{
  "id": "fig-5-1",
  "level": "2",
  "url": "sec-5-1.html#fig-5-1",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "def-5-1",
  "level": "2",
  "url": "sec-5-1.html#def-5-1",
  "type": "Definition",
  "number": "5.1.2",
  "title": "(Laplace transform).",
  "body": " (Laplace transform)   Let be a function. The Laplace transform of is a function , denoted commonly by , defined by for those for which the integral converges.   "
},
{
  "id": "ex-5-1",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": " Compute for a fixed real number    We have  for Thus, we have    "
},
{
  "id": "ex-5-2",
  "level": "2",
  "url": "sec-5-1.html#ex-5-2",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": " Compute .   We have for Thus, we have    "
},
{
  "id": "ex-5-3",
  "level": "2",
  "url": "sec-5-1.html#ex-5-3",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": " Compute    We have for Thus, we have    "
},
{
  "id": "ex-5-4",
  "level": "2",
  "url": "sec-5-1.html#ex-5-4",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": " Compute for a nonnegative integer    We have Using this recursive relation, we obtain for . Thus, we have    "
},
{
  "id": "ex-5-5",
  "level": "2",
  "url": "sec-5-1.html#ex-5-5",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": " Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have    "
},
{
  "id": "ex-5-6",
  "level": "2",
  "url": "sec-5-1.html#ex-5-6",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": " Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have    "
},
{
  "id": "shifting-on-s-axis",
  "level": "2",
  "url": "sec-5-1.html#shifting-on-s-axis",
  "type": "Example",
  "number": "5.1.9",
  "title": "Shifting on the <span class=\"process-math\">\\(s\\)<\/span>-axis.",
  "body": " Shifting on the -axis  Compute for each fixed real number .   By using , we have Therefore, we have    "
},
{
  "id": "sec-5-1-2-25",
  "level": "2",
  "url": "sec-5-1.html#sec-5-1-2-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit step function Heaviside "
},
{
  "id": "unit-step-function",
  "level": "2",
  "url": "sec-5-1.html#unit-step-function",
  "type": "Figure",
  "number": "5.1.10",
  "title": "",
  "body": " The graph of   `  "
},
{
  "id": "ex-5-7",
  "level": "2",
  "url": "sec-5-1.html#ex-5-7",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": " Compute for a nonnegative real number    By using , we have for Thus, we have    "
},
{
  "id": "fig-shifting-on-t-axis",
  "level": "2",
  "url": "sec-5-1.html#fig-shifting-on-t-axis",
  "type": "Figure",
  "number": "5.1.12",
  "title": "",
  "body": " Shifting on the -axis     "
},
{
  "id": "ex-shifting-on-t-axis",
  "level": "2",
  "url": "sec-5-1.html#ex-shifting-on-t-axis",
  "type": "Example",
  "number": "5.1.13",
  "title": "Laplace transform of a shifted function.",
  "body": " Laplace transform of a shifted function  Compute for a nonnegative real number    By , we have Thus, we have    "
},
{
  "id": "thm-5-1",
  "level": "2",
  "url": "sec-5-1.html#thm-5-1",
  "type": "Theorem",
  "number": "5.1.14",
  "title": "Linearity of the Laplace transform.",
  "body": " Linearity of the Laplace transform   Let and be functions defined on such that their Laplace transforms exist for for some real number Then, for any real numbers and we have    "
},
{
  "id": "sec-5-1-2-35",
  "level": "2",
  "url": "sec-5-1.html#sec-5-1-2-35",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " By using the definition of the Laplace transform, we have   "
},
{
  "id": "subsec-5-1-4-2",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "piecewise continuous "
},
{
  "id": "piecewise-continuous-function",
  "level": "2",
  "url": "sec-5-1.html#piecewise-continuous-function",
  "type": "Figure",
  "number": "5.1.15",
  "title": "",
  "body": " A piecewise continuous function     "
},
{
  "id": "subsec-5-1-4-4",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential order "
},
{
  "id": "thm-5-4",
  "level": "2",
  "url": "sec-5-1.html#thm-5-4",
  "type": "Theorem",
  "number": "5.1.16",
  "title": "",
  "body": "  Let be a piecewise continuous function on and of an exponential order as . Then exists.   "
},
{
  "id": "subsec-5-1-4-6",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-4-6",
  "type": "Proof",
  "number": "5.1.1.1",
  "title": "",
  "body": " By the piecewise continuity of on , we have for some finite number of points By the exponential order of , we have for all Thus, the limit exists for all This implies that exists for all   "
},
{
  "id": "thm-5-2",
  "level": "2",
  "url": "sec-5-1.html#thm-5-2",
  "type": "Theorem",
  "number": "5.1.17",
  "title": "Invertibility of the Laplace transform.",
  "body": " Invertibility of the Laplace transform   Let and be two piecewise continuous functions defined on such that their Laplace transforms exist for for some real number If then for all at which both and are continuous.   "
},
{
  "id": "subsec-5-1-5-5",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-5-5",
  "type": "Proof",
  "number": "5.1.2.1",
  "title": "",
  "body": " By the definition of the Laplace transform, we have for all Let be a point at which both and are continuous.   "
},
{
  "id": "subsec-5-1-5-6",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-to-one on the class of continuous functions whose Laplace transforms exist inverse Laplace transform "
},
{
  "id": "thm-5-3",
  "level": "2",
  "url": "sec-5-1.html#thm-5-3",
  "type": "Theorem",
  "number": "5.1.18",
  "title": "",
  "body": "  The inverse Laplace transform operator is linear, that is, where and are constants and and are Laplace transforms of functions that are either piecewise continuous and of exponential order at infinity or delta functions.   "
},
{
  "id": "subsec-5-1-5-11",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-5-11",
  "type": "Proof",
  "number": "5.1.2.2",
  "title": "",
  "body": " By the linearity of the Laplace transform operator , we have By the one-to-one property of the Laplace transform, we conclude that   "
},
{
  "id": "exercises-5-1-1",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-1",
  "type": "Exercise",
  "number": "5.1.3.1",
  "title": "",
  "body": "  Find the Laplace transforms of the following functions on by using formulas derived in .                ( , , and are fixed real numbers.)                (Assume that the integration and summation can be interchanged.)     "
},
{
  "id": "exercises-5-1-2",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-2",
  "type": "Exercise",
  "number": "5.1.3.2",
  "title": "",
  "body": " Find the Laplace transforms of the following piecewise continuous functions either by using the definition or by first expressing the functions as a linear combination of unit step functions and then using formulas derived in .                                  "
},
{
  "id": "exercises-5-1-3",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-3",
  "type": "Exercise",
  "number": "5.1.3.3",
  "title": "",
  "body": " Find the Laplace transform of each of the following functions by using formulas derived in .                     "
},
{
  "id": "exercises-5-1-4",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-4",
  "type": "Exercise",
  "number": "5.1.3.4",
  "title": "",
  "body": " Find the inverse Laplace transform of each of the following Laplace transforms.                                 "
},
{
  "id": "sec-5-2",
  "level": "1",
  "url": "sec-5-2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Applications to Initial Value Problems",
  "body": " Applications to Initial Value Problems   As point out earlier in , we will need to convert a linear initial value problem into an algebraic equation using the Laplace transform. After solving the equation in the domain for the Laplace transform of the solution function, we then apply the inverse Laplace transform operator to return to the domain and obtain the solution of the initial value problem. For these steps, we will need the Laplace transform of derivatives.    A function defined on is said to be of an exponential order as if there exists constants , and such that The number is referred to as an  exponential order  of .    Then, for we have and consequently,     Laplace Transforms of Derivatives  Suppose that is piecewise continuous on and of an exponential order as . Assume that exists. Then, using integration by parts, we have for Thus,   We extend the above idea to higher order derivatives. For instance, suppose that and are continuous and of exponential order. If exists and is piecewise continuous on then applying the formula first to with and then to , we obtain i.e.,   Applying these ideas repeatedly to higher order derivatives, we obtain the following theorem whose proof is omitted.   (Laplace transform of derivatives)  Let be a positive integer. If are continuous on and of exponential order as and if is piecewise continuous on and of exponential order as then where .    presents how naturally arise, reflecting the initial conditions of an -th order linear initial value problem and indicating the potential use of the Laplace transform to covert a linear differential equation with constant coefficients to an algebraic equation with no derivatives of the Laplace transform of the solution variable. Specifically, consider the linear initial value problem of the form: Applying in conjunction with the linearity of , the initial value problem in gives rise to the following algebraic equation in the domain: which takes the form where and is a polynomial in obtained from all the remaining terms on the left side of the equation . It then follows that The solution to the initial value problem ( ) is given by To find we typically use partial fraction decomposition of and and then use appropriate inverse Laplace transforms term by term. For more details on the techniques of partial fraction decomposition, see Appendix .  In principle, one should verify that the equation satisfies the initial value problem by verifying that solves the differential equation and satisfies the initial conditions, especially important when the differential equation is defined also for since the Laplace transform only makes sense to functions on . However, this verification is unnecessary when is continuous on an open interval containing , as the initial value problem is guaranteed to have a unique local solution.  In the following examples, we apply the Laplace transform method to solve initial value problems.   Solve the initial value problem using the Laplace transform:     on     Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have      Solve the initial value problem using the Laplace transform:     on .    Applying the Laplace transform to both sides of the equation, we have   Decompose into partial fractions:   Solving for the constants gives   Hence   Now apply the inverse Laplace transform:  Therefore, We can show that is the solution of the initial value problem on by verifying that it satisfies the differential equation and the initial conditions.     Move this to a later section  Solve the initial value problem using the Laplace transform:    Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have       The general principle for solving initial value problems by the Laplace transform method remains the same as demonstrated in the previous examples. The major effort to make is in computing the Laplace transforms of more complicated functions and finding inverse transforms of more complicated expressions. In the followings sections, we continue exploring additional methods for computing Laplace transforms and solve initial value problems that involve more complicated functions.     Solve the following initial value problems using the Laplace transform method:                        Solve the following initial value problems using the Laplace transform method:                    Solve the following initial value problems using the Laplace transform method:     where    where                "
},
{
  "id": "def-exponential-order-function",
  "level": "2",
  "url": "sec-5-2.html#def-exponential-order-function",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  A function defined on is said to be of an exponential order as if there exists constants , and such that The number is referred to as an  exponential order  of .   "
},
{
  "id": "thm-5-2-1",
  "level": "2",
  "url": "sec-5-2.html#thm-5-2-1",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "(Laplace transform of derivatives).",
  "body": " (Laplace transform of derivatives)  Let be a positive integer. If are continuous on and of exponential order as and if is piecewise continuous on and of exponential order as then where .  "
},
{
  "id": "ex-5-2-1",
  "level": "2",
  "url": "sec-5-2.html#ex-5-2-1",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": " Solve the initial value problem using the Laplace transform:     on     Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have    "
},
{
  "id": "ex-5-2-2",
  "level": "2",
  "url": "sec-5-2.html#ex-5-2-2",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": " Solve the initial value problem using the Laplace transform:     on .    Applying the Laplace transform to both sides of the equation, we have   Decompose into partial fractions:   Solving for the constants gives   Hence   Now apply the inverse Laplace transform:  Therefore, We can show that is the solution of the initial value problem on by verifying that it satisfies the differential equation and the initial conditions.   "
},
{
  "id": "ex-5-2-3",
  "level": "2",
  "url": "sec-5-2.html#ex-5-2-3",
  "type": "Example",
  "number": "5.2.5",
  "title": "Move this to a later section.",
  "body": " Move this to a later section  Solve the initial value problem using the Laplace transform:    Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have    "
},
{
  "id": "exercises-5-2-1",
  "level": "2",
  "url": "sec-5-2.html#exercises-5-2-1",
  "type": "Exercise",
  "number": "5.2.2.1",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method:                     "
},
{
  "id": "exercises-5-2-2",
  "level": "2",
  "url": "sec-5-2.html#exercises-5-2-2",
  "type": "Exercise",
  "number": "5.2.2.2",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method:                  "
},
{
  "id": "exercises-5-2-3",
  "level": "2",
  "url": "sec-5-2.html#exercises-5-2-3",
  "type": "Exercise",
  "number": "5.2.2.3",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method:     where    where              "
},
{
  "id": "sec-5-3",
  "level": "1",
  "url": "sec-5-3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Derivatives and Integrals of Laplace Transforms",
  "body": " Derivatives and Integrals of Laplace Transforms   The evaluation of Laplace transforms and inverse Laplace transforms can often be carried out efficiently by applying differentiation or integration techniques to certain Laplace transforms.     Derivatives of Laplace Transforms  Let be a piecewise continuous function on and of exponential order as . Using the Leibniz rule from in for differentiating under the integral sign, we have Thus, we have In a similar fashion, we obtain Repeating this procedure inductively we obtain   for all positive integers .   Find the Laplace transform .   We have      Find the Laplace transform .   We have       Integrals of Laplace Transforms  Let us discuss about what happens when you integrate a Laplace transform. Let be a piecewise continuous function of exponential order as . Suppose is a real number such that exists for all To compute , let so that Then, in view of , we obtain Consequently, we have   Here, we have considered only those for which the Laplace transform of satisfies the limiting property that as Thus, we have Moreover, we can use to determine the existence of the Laplace transform of For instance, if the integral on the right-hand side of diverges for all then the Laplace transform of does not exist for any   From the definition of the Laplace transform, it follows that provided the improper integral on the right-hand side converges.   Compute for positive values of .  We have  Note that the improper integral converges and is equal to       Compute for positive values of .    We have Since it follows that that the improper integral diverges.     Compute    Since we have for         Find the Laplace transform of each of the following functions:                             Compute     Determine whether has its Laplace transform.   Use . to determine whether the Laplace transform of exists.     Solve the following initial value problems using the Laplace transform method.              with       "
},
{
  "id": "subsec-Derivatives-Laplace-Transforms-4",
  "level": "2",
  "url": "sec-5-3.html#subsec-Derivatives-Laplace-Transforms-4",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": " Find the Laplace transform .   We have    "
},
{
  "id": "subsec-Derivatives-Laplace-Transforms-5",
  "level": "2",
  "url": "sec-5-3.html#subsec-Derivatives-Laplace-Transforms-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": " Find the Laplace transform .   We have    "
},
{
  "id": "subsec-Integrals-Laplace-Transforms-5",
  "level": "2",
  "url": "sec-5-3.html#subsec-Integrals-Laplace-Transforms-5",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": " Compute for positive values of .  We have  Note that the improper integral converges and is equal to    "
},
{
  "id": "subsec-Integrals-Laplace-Transforms-6",
  "level": "2",
  "url": "sec-5-3.html#subsec-Integrals-Laplace-Transforms-6",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  Compute for positive values of .    We have Since it follows that that the improper integral diverges.   "
},
{
  "id": "subsec-Integrals-Laplace-Transforms-7",
  "level": "2",
  "url": "sec-5-3.html#subsec-Integrals-Laplace-Transforms-7",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": " Compute    Since we have for    "
},
{
  "id": "exercises--1",
  "level": "2",
  "url": "sec-5-3.html#exercises--1",
  "type": "Exercise",
  "number": "5.3.3.1",
  "title": "",
  "body": " Find the Laplace transform of each of the following functions:                           "
},
{
  "id": "exercises--2",
  "level": "2",
  "url": "sec-5-3.html#exercises--2",
  "type": "Exercise",
  "number": "5.3.3.2",
  "title": "",
  "body": " Compute   "
},
{
  "id": "exercises--3",
  "level": "2",
  "url": "sec-5-3.html#exercises--3",
  "type": "Exercise",
  "number": "5.3.3.3",
  "title": "",
  "body": " Determine whether has its Laplace transform.   Use . to determine whether the Laplace transform of exists.   "
},
{
  "id": "exercises--4",
  "level": "2",
  "url": "sec-5-3.html#exercises--4",
  "type": "Exercise",
  "number": "5.3.3.4",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method.              with     "
},
{
  "id": "sec-5-4",
  "level": "1",
  "url": "sec-5-4.html",
  "type": "Section",
  "number": "5.4",
  "title": "Laplace Transforms of Periodic Functions",
  "body": " Laplace Transforms of Periodic Functions   In , we computed the Laplace transforms of the periodic functions and that are continuous. In applications, we also have to address periodic functions that are periodic but piecewise continuous on     Periodic Functions    A function is said to be periodic on if there exists a number called a period of such that     Graphically, a periodic function repeats the portion of its graph restricted to across subsequent intervals of the same length .  A piecewise continuous periodic function with a period has the following property: for all positive integers This property is visualized in below.    The graph of .       To compute we express it as an infinite series of integrals as follows: Since the geometric series converges for to we obtain    Let us revisit    Using with , we obtain We compute Hence as expected.  The example above suggests that the direct computation of the Laplace transform of a periodic function may be more convenient.  The example below concerns a periodic function acting as the source term of an initial value problem.   Consider the initial value problem where is given by and for all in    The graph of on is shown below.  The graph of .       Then Taking the Laplace transform of the differential equation , we get With we have Since and it follows that In view of the shifting on the axis property discussed in , the solution of the initial value problem is The graph of this solution is in below. The solution is a piecewise continuous periodic function with period 2, and it converges to the periodic function as   The graph of .           Sketch the graph of three periods of each function below and compute its Laplace transform. The interval for the first period is provided.                                    Solve the following initial value problems using the Laplace transform method. You will need and when      where and for all in      where is the periodic function in of .     where is the periodic function in of .     where is the periodic function in of .      "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-5-4.html#def-",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  A function is said to be periodic on if there exists a number called a period of such that    "
},
{
  "id": "fig-piecewise-periodic-1",
  "level": "2",
  "url": "sec-5-4.html#fig-piecewise-periodic-1",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "subsec-5-4-1-7",
  "level": "2",
  "url": "sec-5-4.html#subsec-5-4-1-7",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": " Let us revisit   "
},
{
  "id": "subsec-5-4-1-11",
  "level": "2",
  "url": "sec-5-4.html#subsec-5-4-1-11",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": " Consider the initial value problem where is given by and for all in   "
},
{
  "id": "fig-piecewise-periodic-2",
  "level": "2",
  "url": "sec-5-4.html#fig-piecewise-periodic-2",
  "type": "Figure",
  "number": "5.4.5",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-piecewise-periodic-3",
  "level": "2",
  "url": "sec-5-4.html#fig-piecewise-periodic-3",
  "type": "Figure",
  "number": "5.4.6",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "exercise-5-4-1",
  "level": "2",
  "url": "sec-5-4.html#exercise-5-4-1",
  "type": "Exercise",
  "number": "5.4.2.1",
  "title": "",
  "body": " Sketch the graph of three periods of each function below and compute its Laplace transform. The interval for the first period is provided.                                  "
},
{
  "id": "exercises-sec-5-4-2",
  "level": "2",
  "url": "sec-5-4.html#exercises-sec-5-4-2",
  "type": "Exercise",
  "number": "5.4.2.2",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method. You will need and when      where and for all in      where is the periodic function in of .     where is the periodic function in of .     where is the periodic function in of .    "
},
{
  "id": "sec-5-5",
  "level": "1",
  "url": "sec-5-5.html",
  "type": "Section",
  "number": "5.5",
  "title": "A Convolution Theorem and its Applications",
  "body": " A Convolution Theorem and its Applications   A crucial step in solving a linear initial value problem using Laplace transforms is determining the inverse Laplace transform of the solution’s Laplace transform. This step can become challenging when the expression, whose inverse Laplace transform is desired, is complicated. In this section, we discuss a procedure with which we can determine the inverse Laplace transform of an expression that is a product of known Laplace transforms. For example, we recall that However, if we were to compute a direct way is to see this problem as This leads to a natural question: in what way can we combine and to produce ? The operation for combining inverse Laplace transforms—specifically, to determine the inverse of a product—is known as convolution , which is formalized in the following definition.    Let and be functions on The  convolution  of and , denoted by , is the function defined by whenever the integral exists for a given in     For computational purposes, may also be written as . It can be proved that see, for example, in . The convolution is particularly useful, and it is given by See, also, in .   Let us return to the example discussed before and calculate the convolution of and . We have as expected.     Convolution Theorem  We now state and prove the most important theorem of this section.    Let and be piecewise continuous functions on and of the exponential order as . Then or equivalently, for     To see how this theorem holds, we need to use a method for changing the order of an iterated integral. We include a proof of the Convolution Theorem below for the sake of completeness; however, not to be distracted from the proof, the reader may choose to skip it for now and proceed directly to apply the theorem.   Proof of  We recall that Then where By changing the order of integration, we obtain    Some fundamental properties of the convolution operation are discussed in ; see the problem .    Application of the Convolution Theorem to Initial Value Problems  The following theorem concerns an interesting application of to linear initial value problems that involve the Dirac delta functions.    Let denote the solution of the initial value problem The the solution of the initial value problem where are constants with and is a piecewise continuous function that is of exponential order as is given by     We first remark that and in are to be interpreted differently (as distributional derivatives ) because of the presence of on the right side of the equation. The fact beyond the scope of this book is that the Laplace transforms of distributional derivatives coincide with the Laplace transforms of the classical derivatives.   Proof of  We first find the solution of the initial value problem . Applying the Laplace transform to the initial value problem and using yields that is, Then, by taking the inverse Laplace transform, we have Next, we take the Laplace transform of both sides of the equation in to get Finally, by applying the convolution theorem ( ), we conclude that solves the initial value problem .    Consider the initial value problem To solve this problem, we first find the solution of the initial value problem Applying the Laplace transform to this problem yields that is, Then, by taking the inverse Laplace transform, we have Finally, by applying with , we conclude that on       For the functions and on given below, compute , and verify that In the following, and are any real numbers.                               Let be functions defined on the interval , and assume that all the convolutions below are well-defined. Use the definition of the convolution to prove the following properties.                    for any constant            Use the convolution theorem ( ) to find the Laplace transform of each of the following functions.                                                        Use the convolution theorem ( ) to find each of the following inverse Laplace transforms.                                    Solve the following integral or integro-differential equations using the Laplace transform.                          Use to solve the following initial value problems.                          Let be a continuous function defined on the interval , and assume that all the convolutions below are well-defined. Show the following properties of the convolution operation.     (This means that is an identity element for the convolution operation.)     where and is a fixed real number.      Let be functions with continuous derivatives on the interval and of exponential order as . Assume further that all the convolutions below are well-defined. Use the convolution theorem ( ) to prove the following properties.               The above properties are also valid for any differentiable functions and , not necessarily of exponential order as , in light of the Leibniz rule   for differentiating an integral (see ).     By using the Leibniz rule , convert each of the following integral or integro-differential equations into an equivalent initial value problem and then solve it by using your favorite method. Compare your answers to those obtained in .                          Solve the following initial value problems using the Laplace transform. Also, determine whether the solutions are continuous at the point(s) of concentration of the involved Dirac delta functions(s).                                         A 32 lb mass stretches a vertically hanging spring 4 feet to equilibrium. The mass is then pulled down 1 foot and released from rest. Assume no damping or external forces. Let denote the displacement of the mass from equilibrium at time measured positive in the downward direction. (Use .)    Set up an initial value problem for     Determine a Dirac delta function that models the impulsive force on the mass exerted by striking it with a hammer to stop it at the first time it passes through equilibrium, keeping it at the equilibrium position thereafter.    Repeat to stop the mass at the second time it passes through equilibrium.      "
},
{
  "id": "def-convolution",
  "level": "2",
  "url": "sec-5-5.html#def-convolution",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": "  Let and be functions on The  convolution  of and , denoted by , is the function defined by whenever the integral exists for a given in    "
},
{
  "id": "sec-5-5-2-4",
  "level": "2",
  "url": "sec-5-5.html#sec-5-5-2-4",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": " Let us return to the example discussed before and calculate the convolution of and . We have as expected.  "
},
{
  "id": "thm-convolution",
  "level": "2",
  "url": "sec-5-5.html#thm-convolution",
  "type": "Theorem",
  "number": "5.5.3",
  "title": "",
  "body": "  Let and be piecewise continuous functions on and of the exponential order as . Then or equivalently, for    "
},
{
  "id": "theorem-convolution-5",
  "level": "2",
  "url": "sec-5-5.html#theorem-convolution-5",
  "type": "Proof",
  "number": "5.5.1.1",
  "title": "Proof of Theorem 5.5.3.",
  "body": " Proof of  We recall that Then where By changing the order of integration, we obtain   "
},
{
  "id": "thm-application-convolution",
  "level": "2",
  "url": "sec-5-5.html#thm-application-convolution",
  "type": "Theorem",
  "number": "5.5.4",
  "title": "",
  "body": "  Let denote the solution of the initial value problem The the solution of the initial value problem where are constants with and is a piecewise continuous function that is of exponential order as is given by    "
},
{
  "id": "subsec-application-convolution-5",
  "level": "2",
  "url": "sec-5-5.html#subsec-application-convolution-5",
  "type": "Proof",
  "number": "5.5.2.1",
  "title": "Proof of Theorem 5.5.4.",
  "body": " Proof of  We first find the solution of the initial value problem . Applying the Laplace transform to the initial value problem and using yields that is, Then, by taking the inverse Laplace transform, we have Next, we take the Laplace transform of both sides of the equation in to get Finally, by applying the convolution theorem ( ), we conclude that solves the initial value problem .  "
},
{
  "id": "subsec-application-convolution-6",
  "level": "2",
  "url": "sec-5-5.html#subsec-application-convolution-6",
  "type": "Example",
  "number": "5.5.5",
  "title": "",
  "body": " Consider the initial value problem To solve this problem, we first find the solution of the initial value problem Applying the Laplace transform to this problem yields that is, Then, by taking the inverse Laplace transform, we have Finally, by applying with , we conclude that on   "
},
{
  "id": "exercise-5-5-1",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-1",
  "type": "Exercise",
  "number": "5.5.3.1",
  "title": "",
  "body": " For the functions and on given below, compute , and verify that In the following, and are any real numbers.                             "
},
{
  "id": "exercise-5-5-2",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-2",
  "type": "Exercise",
  "number": "5.5.3.2",
  "title": "",
  "body": " Let be functions defined on the interval , and assume that all the convolutions below are well-defined. Use the definition of the convolution to prove the following properties.                    for any constant          "
},
{
  "id": "exercise-5-5-3",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-3",
  "type": "Exercise",
  "number": "5.5.3.3",
  "title": "",
  "body": " Use the convolution theorem ( ) to find the Laplace transform of each of the following functions.                                                      "
},
{
  "id": "exercise-5-5-4",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-4",
  "type": "Exercise",
  "number": "5.5.3.4",
  "title": "",
  "body": " Use the convolution theorem ( ) to find each of the following inverse Laplace transforms.                                  "
},
{
  "id": "exercise-5-5-5",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-5",
  "type": "Exercise",
  "number": "5.5.3.5",
  "title": "",
  "body": " Solve the following integral or integro-differential equations using the Laplace transform.                        "
},
{
  "id": "exercise-5-5-6",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-6",
  "type": "Exercise",
  "number": "5.5.3.6",
  "title": "",
  "body": " Use to solve the following initial value problems.                        "
},
{
  "id": "exercise-5-5-7",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-7",
  "type": "Exercise",
  "number": "5.5.3.7",
  "title": "",
  "body": " Let be a continuous function defined on the interval , and assume that all the convolutions below are well-defined. Show the following properties of the convolution operation.     (This means that is an identity element for the convolution operation.)     where and is a fixed real number.    "
},
{
  "id": "exercise-5-5-8",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-8",
  "type": "Exercise",
  "number": "5.5.3.8",
  "title": "",
  "body": " Let be functions with continuous derivatives on the interval and of exponential order as . Assume further that all the convolutions below are well-defined. Use the convolution theorem ( ) to prove the following properties.               The above properties are also valid for any differentiable functions and , not necessarily of exponential order as , in light of the Leibniz rule   for differentiating an integral (see ).   "
},
{
  "id": "exercise-5-5-9",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-9",
  "type": "Exercise",
  "number": "5.5.3.9",
  "title": "",
  "body": " By using the Leibniz rule , convert each of the following integral or integro-differential equations into an equivalent initial value problem and then solve it by using your favorite method. Compare your answers to those obtained in .                        "
},
{
  "id": "exercise-5-5-10",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-10",
  "type": "Exercise",
  "number": "5.5.3.10",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform. Also, determine whether the solutions are continuous at the point(s) of concentration of the involved Dirac delta functions(s).                                       "
},
{
  "id": "exercise-5-5-11",
  "level": "2",
  "url": "sec-5-5.html#exercise-5-5-11",
  "type": "Exercise",
  "number": "5.5.3.11",
  "title": "",
  "body": " A 32 lb mass stretches a vertically hanging spring 4 feet to equilibrium. The mass is then pulled down 1 foot and released from rest. Assume no damping or external forces. Let denote the displacement of the mass from equilibrium at time measured positive in the downward direction. (Use .)    Set up an initial value problem for     Determine a Dirac delta function that models the impulsive force on the mass exerted by striking it with a hammer to stop it at the first time it passes through equilibrium, keeping it at the equilibrium position thereafter.    Repeat to stop the mass at the second time it passes through equilibrium.    "
},
{
  "id": "sec-5-6",
  "level": "1",
  "url": "sec-5-6.html",
  "type": "Section",
  "number": "5.6",
  "title": "Systems of Linear Differential Equations",
  "body": " Systems of Linear Differential Equations   This chapter focuses on the applications of the Laplace transform to solve systems of linear ordinary differential equations. Using the Laplace transform, we convert a system of differential equations into a system of algebraic equations involving Laplace transforms of the unknown functions (dependent variables), solve this algebraic system for the Laplace transforms , and then apply the inverse Laplace transform to recover the functions from their Laplace transforms. These functions then become solutions of the differential equations in the system.  To fix the ideas, we consider below a first-order linear system of ordinary differential equations in the three variables : where    are unknown functions of time ,    the coefficients are fixed real numbers, and     are given functions of , possibly zero.     The system is said to be  decoupled  if for all with and  coupled  if for each there is with and The linear system is said to be  partially decoupled  if it has a structure that allows solving one or more of the equations in isolation, and then using those solutions to simplify or solve the remaining equations.    The Laplace Transform Method  To solve the linear system with the initial conditions we apply the Laplace transform to each equation. The system is then transformed into   where are the Laplace transforms of , and .  We solve the above system for using algebraic techniques, such as Cramer’s rule, Gaussian elimination, etc. and then apply the inverse Laplace transform to obtain solutions .  We proceed to discuss four main examples; namely, radioactive decay series, mixing solutions, coupled spring-mass systems, and electrical circuits.    Radioactive Decay Series  Consider a three-stage radioactive decay series of a radioactive element represented in a schematic diagram below: where      is a parent radioactive isotope,     is a radioactive daughter element, and     is a stable (non-decaying) end element.     Let We assume that the disintegration rate of at time is proportional to its amount at that time, and the same holds true for . Then the system of differential equations modeling the decay series is subject to the initial conditions:   The linear system describes how the parent isotope decays into , which in turn decays into a stable isotope . We can adopt this scheme to model real-world decay chains such as The linear system is an example of a  partially decoupled  system. We observe that the solutions of the differential equation in the system can be obtained in a sequence of steps: first solve the first equation for , substitute this into the second equation to find using the integrating factor method, and then substitute into the third equation to solve for . Details are omitted, but the solutions can be found to be Let us obtain these solutions by using the Laplace transform method.    Step 1: Laplace Transforms. Since we have and therefore Similarly,   which yields and therefore Also, gives    Step 2: Inverse Laplace Transforms. We have Since we have Finally, since we have Thus, the solutions are given by   as expected.    Mixing Tanks  Consider two connected mixing tanks as shown in the figure below.   Two connected mixing tanks.       When the system becomes       Coupled Spring-Mass Systems  Suppose that two masses and are connected to two springs and hanging vertically from a rigid support to form a coupled spring-mass system as shown in the figure below.   A coupled mass-spring system showing unstretched, equilibrium, motion, and coordinate-axis.      Let and be the constants of proportionality in Hooke's law for the springs and , respectively. When both masses and are in equilibrium, we have Adding together the two relations in the above display yields which reflects the intuition that the presence of the spring could be thought of considering the mass in place of and removing the spring entirely. We recall that the stretch of the spring depends on both masses and , while the stretch of the spring depends only on the mass when the spring constants are computed using the gravitational force.  Let and denote the vertical displacements of the masses from their equilibrium positions at time . We take the positive direction of the displacements to be vertically downward. When the masses are in motion, the spring is subject to both a stretch and a compression, so that its net stretch of the spring is given by when the stretch of the spring is .  The restoring force of the spring acting on the mass at time is , and the restoring force of the spring acting on the mass at time is . In addition to the restoring force of the spring , the mass also experiences the force of at time . Let and denote the damping coefficients for the masses and , respectively. Also, let and denote the external forces acting on the masses and , respectively. We assume that the spring weights are negligible compared to the weights of the masses. Suppressing in and and using Newton's law, we see that the motion of the two masses in the spring-mass system is described by and Using , we obtain The above system of second-order coupled linear differential equations describes the motion of the two masses in the coupled spring-mass system, which, together with the initial conditions , forms an initial value problem.  In the next example, we solve the initial value problem for , , , and    Solve the second-order coupled system of linear differential equations with initial conditions   Taking the Laplace transform yields   Using the given initial conditions yields Solving for and gives   Partial fraction decomposition of and are   Taking the inverse Laplace transform yields which render the solutions of the given initial value problem .   Graphs of the solutions and     The graph of is shown in blue, and the graph of is shown in red.        Electrical Network Systems  We discussed series and parallel circuits in . In below, we have an circuit with a voltage source . We develop a system of linear differential equations to find the charge on the capacitor and currents and flowing through the resistor and inductor, respectively. Let be the current flowing through the capacitor.   An LRC circuit with a voltage source.      We observe that the circuit contains three distinct closed loops:      Loop 1 : consisting of the battery, resistor, and capacitor;     Loop 2 : consisting of the battery, resistor, and inductor; and     Loop 3 : formed by the capacitor and inductor alone.     The system of corresponding equations for the loops are: We observe that each equation in the system can be obtained from the remaining two. For example, the equation for Loop 2 can be obtained by adding the equations for Loop 1 and Loop 3. For the discussion that follows, we omit the equation for Loop 2.  Furthermore, by Kirchhoff’s second law, the current split at the junction A is given by which, in view of , becomes Thus, a linear system in and is   We now proceed to solve the system . Differentiating the third equation in with respect to yields Solving for from the second equation in and substituting it into gives Substituting this expression for into the equation obtained by differentiating the first equation in with respect to , we get which can be solved for Once is determined, we find by using We then find from the first equation in by using there. Finally, we find      Solve the initial value problem by using the Laplace transform.    "
},
{
  "id": "sec-5-6-2-3",
  "level": "2",
  "url": "sec-5-6.html#sec-5-6-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " decoupled   coupled   partially decoupled  "
},
{
  "id": "subsec-radioactive-5",
  "level": "2",
  "url": "sec-5-6.html#subsec-radioactive-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " partially decoupled  "
},
{
  "id": "subsec-radioactive-6",
  "level": "2",
  "url": "sec-5-6.html#subsec-radioactive-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 1: Laplace Transforms. "
},
{
  "id": "subsec-radioactive-8",
  "level": "2",
  "url": "sec-5-6.html#subsec-radioactive-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 2: Inverse Laplace Transforms. "
},
{
  "id": "mixing-tanks",
  "level": "2",
  "url": "sec-5-6.html#mixing-tanks",
  "type": "Figure",
  "number": "5.6.1",
  "title": "",
  "body": " Two connected mixing tanks.     "
},
{
  "id": "fig-coupled-mass-spring",
  "level": "2",
  "url": "sec-5-6.html#fig-coupled-mass-spring",
  "type": "Figure",
  "number": "5.6.2",
  "title": "",
  "body": " A coupled mass-spring system showing unstretched, equilibrium, motion, and coordinate-axis.     "
},
{
  "id": "subsec-Coupled-Spring-Mass-Systems-8",
  "level": "2",
  "url": "sec-5-6.html#subsec-Coupled-Spring-Mass-Systems-8",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": " Solve the second-order coupled system of linear differential equations with initial conditions   Taking the Laplace transform yields   Using the given initial conditions yields Solving for and gives   Partial fraction decomposition of and are   Taking the inverse Laplace transform yields which render the solutions of the given initial value problem .   Graphs of the solutions and     The graph of is shown in blue, and the graph of is shown in red.     "
},
{
  "id": "fig-lrc-circuit",
  "level": "2",
  "url": "sec-5-6.html#fig-lrc-circuit",
  "type": "Figure",
  "number": "5.6.5",
  "title": "",
  "body": " An LRC circuit with a voltage source.     "
},
{
  "id": "subsec-Electrical-Network-Systems-5",
  "level": "2",
  "url": "sec-5-6.html#subsec-Electrical-Network-Systems-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Loop 1 Loop 2 Loop 3 "
},
{
  "id": "exercises-linear-systems-1",
  "level": "2",
  "url": "sec-5-6.html#exercises-linear-systems-1",
  "type": "Exercise",
  "number": "5.6.6.1",
  "title": "",
  "body": " Solve the initial value problem by using the Laplace transform.  "
},
{
  "id": "sec-7-1",
  "level": "1",
  "url": "sec-7-1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Differentiation Under the Integral",
  "body": " Differentiation Under the Integral   Something about differentiating under the integral goes here yes. Testing   Leibniz Rule   Let be a function on a rectangle such that both and are continuous on Then       Leibniz Rule for Improper Integrals   Let be a function on a rectangle such that, for each in both and have improper integrals on and such that, for each in  is differentiable in for each in Suppose, further, that there exists a function on such that for all and for all in and such that is convergent. Then       Let be a function on a rectangle such that both and are continuous on Let and be differentiable functions on such that for all in Then       "
},
{
  "id": "thm-Leibnitz-for-Integrals",
  "level": "2",
  "url": "sec-7-1.html#thm-Leibnitz-for-Integrals",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "Leibniz Rule.",
  "body": " Leibniz Rule   Let be a function on a rectangle such that both and are continuous on Then     "
},
{
  "id": "thm-Leibnitz-Rule-Improper-Integrals",
  "level": "2",
  "url": "sec-7-1.html#thm-Leibnitz-Rule-Improper-Integrals",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "Leibniz Rule for Improper Integrals.",
  "body": " Leibniz Rule for Improper Integrals   Let be a function on a rectangle such that, for each in both and have improper integrals on and such that, for each in  is differentiable in for each in Suppose, further, that there exists a function on such that for all and for all in and such that is convergent. Then    "
},
{
  "id": "thm-DUI-v2",
  "level": "2",
  "url": "sec-7-1.html#thm-DUI-v2",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "",
  "body": "  Let be a function on a rectangle such that both and are continuous on Let and be differentiable functions on such that for all in Then    "
},
{
  "id": "sec-7-2",
  "level": "1",
  "url": "sec-7-2.html",
  "type": "Section",
  "number": "6.2",
  "title": "Partial Fraction Decomposition",
  "body": " Partial Fraction Decomposition   Let and be general polynomials in and let and be the degrees of and , respectively. Then the  rational  function is said to be  proper  if and  improper  if When is improper, we perform polynomial division to obtain where is the  quotient  polynomial of degree and is called the  remainder  polynomial and it is of degree less than For example, if then so that and   After performing polynomial division, the term is already a polynomial and requires no decomposition. The term is a proper rational function and the only part of that is usually decomposed into partial fractions. Therefore, in what follows, we assume that itself is proper. The method of partial fraction decomposition then depends entirely on the factorization of the denominator . We now examine all possible cases that may occur.    Linear Factors  If the denominator contains distinct linear factors, then the decomposition has the form where are constants to be determined. Let us illustrate this with an example below.   Perform partial fraction decomposition of Suppose there are constants and such that Multiplying through by gives which must be an identity in For convenience, we do allow or in this identity. We find , , so      Repeated Linear Factors  If then the decomposition includes every power of the linear factor:  are constants to be determined.   Perform the partial fraction decomposition of Suppose there exist constants and such that Multiplying through by gives We find and Then      Irreducible Quadratic Factors  Suppose that contains a factor that is irreducible over the real numbers. The partial fraction decomposition of contains a term of the form where and are constants to be determined. We illustrate this in the next an example.   To perform the partial fraction decomposition of we find , and such that Notice the term corresponding to the linear factor of the denominator. Multiplying through by yields Comparing coefficients gives so      Repeated Irreducible Quadratic Factors  If where the quadratic is irreducible and repeated with multiplicity then the decomposition is of the form with the constants and are to be determined. We illustrate this in the next example.   To perform the partial fraction decomposition of we find constants such that Multiplying both sides by gives Expanding and matching coefficients yields and hence      Mixed Factors  If the denominator factors as The symbol denotes product .  then the full partial fraction decomposition of contains terms      , , etc., and     , , etc.   Let us illustrate this in the next example   To perform the partial fraction decomposition of we find constants such that Multiplying both sides by gives Expanding and comparing coefficients yields so       Decompose each rational function into partial fractions.                                            Answers                          (determine )         Divide first: and then decompose to get            "
},
{
  "id": "sec-7-2-3-3",
  "level": "2",
  "url": "sec-7-2.html#sec-7-2-3-3",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": " Perform partial fraction decomposition of Suppose there are constants and such that Multiplying through by gives which must be an identity in For convenience, we do allow or in this identity. We find , , so   "
},
{
  "id": "sec-7-2-4-3",
  "level": "2",
  "url": "sec-7-2.html#sec-7-2-4-3",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": " Perform the partial fraction decomposition of Suppose there exist constants and such that Multiplying through by gives We find and Then   "
},
{
  "id": "sec-7-2-5-3",
  "level": "2",
  "url": "sec-7-2.html#sec-7-2-5-3",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": " To perform the partial fraction decomposition of we find , and such that Notice the term corresponding to the linear factor of the denominator. Multiplying through by yields Comparing coefficients gives so   "
},
{
  "id": "sec-7-2-6-3",
  "level": "2",
  "url": "sec-7-2.html#sec-7-2-6-3",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": " To perform the partial fraction decomposition of we find constants such that Multiplying both sides by gives Expanding and matching coefficients yields and hence   "
},
{
  "id": "sec-7-2-7-4",
  "level": "2",
  "url": "sec-7-2.html#sec-7-2-7-4",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": " To perform the partial fraction decomposition of we find constants such that Multiplying both sides by gives Expanding and comparing coefficients yields so   "
},
{
  "id": "sec-7-2-8-1",
  "level": "2",
  "url": "sec-7-2.html#sec-7-2-8-1",
  "type": "Exercise",
  "number": "6.2.6.1",
  "title": "",
  "body": " Decompose each rational function into partial fractions.                                         "
},
{
  "id": "sec-7-3",
  "level": "1",
  "url": "sec-7-3.html",
  "type": "Section",
  "number": "6.3",
  "title": "Formulas",
  "body": " Formulas   Common Laplace Transforms                1.           2.           3.           4.           5.           6.           7.           8.           9.           10.           11.           12.           13.           14.           15.           16.           17.           18.           19.           20.           21.           22.           23.           24.           25.           26.           27.           28.           29.           30.           31.           32.           33.           34.          35.          36.          37.          38.          39.          40.          41.          42.          43.          44.          45.          46.          47.          48.          49.          50.          51.          52.          53.          54.          55.          56.          57.            Derivatives  We use notations and to synonymously denote the derivative of with respect to    Differentiation Rules     Constant:       Constant Multiple:       Sum:       Product:       Quotient:       Chain:       Power:       Power:                                                                                                         "
},
{
  "id": "ws-1",
  "level": "1",
  "url": "ws-1.html",
  "type": "Worksheet",
  "number": "1.1",
  "title": "WS-1",
  "body": " WS-1  This is a test worksheet.  "
},
{
  "id": "ws-2",
  "level": "1",
  "url": "ws-2.html",
  "type": "Worksheet",
  "number": "1.2",
  "title": "WS-2",
  "body": " WS-2  This is a test worksheet.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
