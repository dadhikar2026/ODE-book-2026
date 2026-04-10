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
  "body": " Introduction   The order linear differential equations are of the form   where the functions and are continuous on some interval .   "
},
{
  "id": "sec-3-5",
  "level": "1",
  "url": "sec-3-5.html",
  "type": "Section",
  "number": "3.2",
  "title": "Forced Oscillations and Resonance",
  "body": " Forced Oscillations and Resonance   Something about forced oscillations and resonance goes here yes.   "
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
  "body": " The Laplace Transform   Consider a forced oscillator, as discussed in Section of , described by the equation where is an impulsive force. At the mass is at rest at its equilibrium position. At time , the mass experiences a sharp, brief downward impact, such as a hammer strike, modeled by an the impulsive force An impulsive force of this nature is commonly modeled by using an idealized mathematical object, called the Dirac delta  function denoted by which is characterized by the following properties:      for all ; and     for any function continuous on an open interval containing .     We note that when in (ii), we obtain . Based on the properties (i) and (ii) characterizing , it is important to recognize that is not a function in the usual sense; rather it is a typical example of generalized functions or distributions which were first developed rigorously by Sergei Sobolev in 1936 and later in 1950s by Laurent Schwartz who is known to have given the most definitive and systematic development of the theory of distributions. For an elegant introduction to distribution theory with application, the reader is referred to Zemanian A.H. Zemanian, Distribution theory and transform analysis , second edition, Dover, New York, 1987; MR0918977 .  The Dirac delta function is particularly useful for modeling phenomena involving instantaneous or localized effects, such as a lightning strike, a point heat explosion, or the sudden burst of dye at a specific location. Because of the properties (i) and (ii), the Dirac delta function is said to be concentrated at   Mathematically, can be interpreted as the limit of a sequence of approximating impulse functions. One such approximation is given by which represents a pulse of height and width , centered at .   The graph of .      As , this pulse becomes increasingly narrow and tall, concentrating its effect at , i.e., while maintaining a total area of 1—mirroring the property (ii) of , i.e., so that Furthermore, if is continuous from right at , then by using l'Hôpital's rule and the continuity of at from right.  By formally interchanging the limit and the integral in both and , an operation which needs justification in integration theories, we obtain and Thus, we observe in and that exhibits the properties (i) and (ii) that characterize , and therefore can be interpreted as the limit of a sequence of functions that approximate an impulsive behavior. We recognize that also does not define a function on in the classical sense because its value at is Instead, the limit is understood as a generalized function, or a distribution, because of the way it operates primarily through its action on other functions within integrals, as described by the property ii. which is motivated by .  By using the property ii., we find that for all in we have for all real numbers From this point onward, we will focus on the case where and . Under this assumption, reduces to for all real values of . This integral is known as the Laplace transform (see ) of the Dirac delta function , denoted by In particular, when we have   The main objective of this chapter is to develop a method for solving initial value problems such as in which is either discontinuous or involves the Dirac delta functions.The methods of undetermined coefficients and variation of parameters are not relevant to with because the calculus of distributions is beyond the scope of this book. In particular, we do not have a meaning of in this case.  Being motivated from with the Dirac delta function in the integrand, we first define the Laplace transform of classical functions defined on    (Laplace transform)   Let be a function. The Laplace transform of is a function , denoted commonly by , defined by for those for which the integral converges.    The symbol represents a transformation that maps an input function of the variable (usually time) to an output function of the variable (usually involving frequency when is a complex number). This action of the transformation is depicted in the figure below.   The variable in the definition of the Laplace transform can, in general, be a complex variable; however, in the current chapter, we will restrict to a real variable.  The Laplace transform is a powerful tool for solving initial value problems for ordinary differential equations, especially those with nonhomogeneous terms that are piecewise continuous or involve the Dirac delta function. The key idea is to apply the Laplace transform to both sides of the differential equation, which converts the problem from the time domain (involving ) to the complex frequency domain (involving ). This transformation turns differentiation into algebraic manipulation, making it easier to solve for the transformed function . Once we have , we can then find the original function by applying the inverse Laplace transform to . Before we begin using Laplace transforms to solve initial value problems, we compute the Laplace transforms of several common functions that appeared in the previous chapters, such as polynomial functions, exponential functions, trigonometric functions, and some combinations of these functions. The Laplace transform of the Dirac delta function is encountered in and will be used in solving initial value problems with impulsive forcing.  By using , we compute the Laplace transforms of some common functions in the examples below.   Compute for a fixed real number    We have  for Thus, we have      Compute .   We have for Thus, we have      Compute    We have for Thus, we have      Compute for a nonnegative integer    We have Using this recursive relation, we obtain for . Thus, we have      Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have      Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have      Shifting on the -axis  Compute for each fixed real number .   By using , we have Therefore, we have     A simple but useful example of a discontinuous function is the unit step function  , also known as the Heaviside function (named in honor of the English mathematician, engineer, and physicist Oliver Heaviside (1850–1925)). It is defined on by The unit step function with the jump discontinuity at is given by The graph of the unit step function is shown in the figure below.   The unit step function   The unit step function .      The unit step function is used to model situations where a quantity changes abruptly at a certain point in time, such as a switch being turned on or off, or a force being applied suddenly.   Compute for a nonnegative real number    By , we have for Note that the improper integral defining converges only for Thus,     To model situations in applications where an external force or source begins acting only after time , we analyze the effect of shifting the source function along the -axis.  Suppose the function is effective only at and after the time . In that case, we can write which is obtained by shifting the graph of to the right by units and taking the zero function to the left of . This function can be expressed in terms of the unit step function as     Shifting on the axis  Compute for a nonnegative real number    By , we have Thus, we have      The linearity of the Riemann integration yields the linearity of the Laplace transform operator , as stated in the following theorem.   Linearity of the Laplace transform   Let and be functions defined on such that their Laplace transforms exist for for some real number Then, for any real numbers and we have      By using the definition of the Laplace transform, we have      When does the Laplace transform exist?  An immediate question one might ask is: what sort of functions actually have Laplace transforms according to ? To answer this in the context of the Riemann integration, we note that is the limit of the definite integrals as whenever it exists, and therefore cannot have a vertical asymptote at any point . To avoid any chances for vertical asymptotes, we take to be piecewise continuous on A piecewise continuous function on is one which can have at most a finite number of jump discontinuities on each closed subinterval of . An example of a piecewise continuous function is depicted in the figure below.   However, the condition that be piecewise continuous on would not be sufficient for the existence of its Laplace transform. For instance, the function does not have its Laplace transform. In fact, for each fixed number , there exists such that for all and this implies that This results in for all This holds for every number , and therefore does have its Laplace transform. From this example, we observe that must control the growth property of as for the existence its Laplace transform. In particular, in addition to the piecewise continuity, if is of an exponential order as i.e., if there exist constants , and such that then, for all , we find Consequently, exists for We formalize all these ideas together in the following existence theorem.    Let be a piecewise continuous function on and of an exponential order as . Then exists.     By the piecewise continuity of on , we have for some finite number of points By the exponential order of , we have for all Thus, the limit exists for all This implies that exists for all    We are also interested in whether two different functions can have the same Laplace transform. Trivial examples of functions that have the same Laplace transform are with and defined by Note that and and for all Since and differ only at one single point in it follows, by the definition of the Laplace transform, that for This implies that is not a one-to-one function from functions of the variable to functions of the variable .    Inverse Laplace transform  As mentioned at the end of Section , the forced oscillator ( ) cannot be solved using the methods from previous chapters when is a Dirac delta function. Even if is only piecewise continuous, the earlier methods can become quite tedious to apply. The Laplace transform method provides a more efficient approach, and this method involves taking the Laplace transform of a linear differential equation and converting it into an algebraic equation. After solving the algebraic equation in the -domain for the Laplace transform of the solution function, we then apply the one-to-one property of the Laplace transform to return to the solution in the domain. Evidently, for the method to work, we need to know when is one-to-one, so that the inverse makes sense.  For continuous functions, the following theorem establishes the invertibility of the Laplace transform.   Invertibility of the Laplace transform   Let and be two piecewise continuous functions defined on such that their Laplace transforms exist for for some real number If then for all at which both and are continuous.     By the definition of the Laplace transform, we have for all Let be a point at which both and are continuous.    By , for continuous functions and satisfying for all , where is a positive number, we have for all in Consequently, is one-to-one on the class of continuous functions whose Laplace transforms exist . Thus, for every continuous function on with the Laplace transform of we have for all Here, is called the inverse Laplace transform    We recall from that for Therefore, when we speak of we mean a function of that agrees with for , and it can have any arbitrary value at In practice, we choose the function that best fits the problem at hand, but in this book, we will use unless this choice is clearly inappropriate. It is understood that any other function that differs from only at may also be used. These considerations will also be made at the points of jump discontinuity when we take the inverse Laplace transform of the Laplace transform of a piecewise continuous functions of exponential order as   In view of , may represent multiple functions when has jump discontinuities on . For most functions discussed in this chapter, it won’t be much of an issue since we will be working with either continuous functions or, at worse, functions that have finite number of discontinuity, with the exception of a Dirac delta distributions which has its Laplace transform encoded in the definition itself as Since is discontinuous only at we will adopt More rigorous arguments about such ideas pertaining to Dirac delta functions exist in an area called distribution theory, which is beyond the scope of this book.  It follows that the inverse Laplace transform operator is linear, and we formalize this linearity property of in the following theorem.    The inverse Laplace transform operator is linear, that is, where and are constants and and are Laplace transforms of functions that are either piecewise continuous and of exponential order at infinity or delta functions.     By the linearity of the Laplace transform operator , we have By the one-to-one property of the Laplace transform, we conclude that      Exercises    Find the Laplace transforms of the following functions on by using formulas derived in .                ( , , and are fixed real numbers.)                (Assume that the integration and summation can be interchanged.)       Find the Laplace transforms of the following piecewise continuous functions either by using the definition or by first expressing the functions as a linear combination of unit step functions and then using formulas derived in .                                    Find the Laplace transform of each of the following functions by using formulas derived in .                       Find the inverse Laplace transform of each of the following Laplace transforms.                                   "
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
  "id": "fig-5-1-1",
  "level": "2",
  "url": "sec-5-1.html#fig-5-1-1",
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
  "id": "ex-5-1-1",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-1",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": " Compute for a fixed real number    We have  for Thus, we have    "
},
{
  "id": "ex-5-1-2",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-2",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": " Compute .   We have for Thus, we have    "
},
{
  "id": "ex-5-1-3",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-3",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": " Compute    We have for Thus, we have    "
},
{
  "id": "ex-5-1-4",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-4",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": " Compute for a nonnegative integer    We have Using this recursive relation, we obtain for . Thus, we have    "
},
{
  "id": "ex-5-1-5",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-5",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": " Compute for a positive real number    By using integration by parts, we have where is an arbitrary constant. Then Since as and is bounded, we have for The improper integral converges only for when Therefore, we have    "
},
{
  "id": "ex-5-1-6",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-6",
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
  "id": "sec-5-1-2-24",
  "level": "2",
  "url": "sec-5-1.html#sec-5-1-2-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit step function Heaviside "
},
{
  "id": "fig-sage-cubic",
  "level": "2",
  "url": "sec-5-1.html#fig-sage-cubic",
  "type": "Figure",
  "number": "5.1.10",
  "title": "",
  "body": " The unit step function   The unit step function .    "
},
{
  "id": "ex-5-1-7",
  "level": "2",
  "url": "sec-5-1.html#ex-5-1-7",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": " Compute for a nonnegative real number    By , we have for Note that the improper integral defining converges only for Thus,    "
},
{
  "id": "shifting-on-t-axis",
  "level": "2",
  "url": "sec-5-1.html#shifting-on-t-axis",
  "type": "Example",
  "number": "5.1.12",
  "title": "Shifting on the <span class=\"process-math\">\\(t-\\)<\/span>axis.",
  "body": " Shifting on the axis  Compute for a nonnegative real number    By , we have Thus, we have    "
},
{
  "id": "thm-5-1-1",
  "level": "2",
  "url": "sec-5-1.html#thm-5-1-1",
  "type": "Theorem",
  "number": "5.1.13",
  "title": "Linearity of the Laplace transform.",
  "body": " Linearity of the Laplace transform   Let and be functions defined on such that their Laplace transforms exist for for some real number Then, for any real numbers and we have    "
},
{
  "id": "sec-5-1-2-33",
  "level": "2",
  "url": "sec-5-1.html#sec-5-1-2-33",
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
  "id": "subsec-5-1-4-3",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential order "
},
{
  "id": "thm-5-1-4",
  "level": "2",
  "url": "sec-5-1.html#thm-5-1-4",
  "type": "Theorem",
  "number": "5.1.14",
  "title": "",
  "body": "  Let be a piecewise continuous function on and of an exponential order as . Then exists.   "
},
{
  "id": "subsec-5-1-4-5",
  "level": "2",
  "url": "sec-5-1.html#subsec-5-1-4-5",
  "type": "Proof",
  "number": "5.1.1.1",
  "title": "",
  "body": " By the piecewise continuity of on , we have for some finite number of points By the exponential order of , we have for all Thus, the limit exists for all This implies that exists for all   "
},
{
  "id": "thm-5-1-2",
  "level": "2",
  "url": "sec-5-1.html#thm-5-1-2",
  "type": "Theorem",
  "number": "5.1.15",
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
  "id": "thm-5-1-3",
  "level": "2",
  "url": "sec-5-1.html#thm-5-1-3",
  "type": "Theorem",
  "number": "5.1.16",
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
  "id": "exercises-5-1-2",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-2",
  "type": "Exercise",
  "number": "5.1.3.1",
  "title": "",
  "body": "  Find the Laplace transforms of the following functions on by using formulas derived in .                ( , , and are fixed real numbers.)                (Assume that the integration and summation can be interchanged.)     "
},
{
  "id": "exercises-5-1-3",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-3",
  "type": "Exercise",
  "number": "5.1.3.2",
  "title": "",
  "body": " Find the Laplace transforms of the following piecewise continuous functions either by using the definition or by first expressing the functions as a linear combination of unit step functions and then using formulas derived in .                                  "
},
{
  "id": "exercises-5-1-4",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-4",
  "type": "Exercise",
  "number": "5.1.3.3",
  "title": "",
  "body": " Find the Laplace transform of each of the following functions by using formulas derived in .                     "
},
{
  "id": "exercises-5-1-5",
  "level": "2",
  "url": "sec-5-1.html#exercises-5-1-5",
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
  "body": " Applications to Initial Value Problems  As point out earlier in , we will need to convert a linear initial value problem into an algebraic equation using the Laplace transform. After solving the equation in the domain for the Laplace transform of the solution function, we then apply the inverse Laplace transform operator to return to the domain and obtain the solution of the initial value problem. For these steps, we will need the Laplace transform of derivatives.  Suppose that is continuous on and of exponential order as Then there exists constants , and such that The number is referred to as an exponential order of . Then, for we have and consequently, Suppose, further, that is piecewise continuous on Then, using integration by parts, we have for Thus,   We extend the above idea to higher order derivatives. For instance, suppose that and are continuous and of exponential order. If exists and is piecewise continuous on then applying the formula ( ) first to with and then to , we obtain i.e.,   Applying these ideas repeatedly to higher order derivatives, we obtain the following theorem whose proof is omitted.   (Laplace transform of derivatives)  Let be a positive integer. If are continuous on and of exponential order as and if is piecewise continuous on and of exponential order as then where .    presents how naturally arise, reflecting the initial conditions of an -th order linear initial value problem and indicating the potential use of the Laplace transform to covert a linear differential equation with constant coefficients to an algebraic equation with no derivatives of the Laplace transform of the solution variable. Specifically, consider the linear initial value problem of the form: Applying in conjunction with the linearity of , the initial value problem in gives rise to the following algebraic equation in the domain: which takes the form where and is a polynomial in obtained from all the remaining terms on the left side of the equation . It then follows that The solution to the initial value problem ( ) is given by To find we typically use partial fraction decomposition of and and then use appropriate inverse Laplace transforms term by term. For more details on the techniques of partial fraction decomposition, see Appendix .  In principle, one should verify that the equation satisfies the initial value problem  by verifying that solves the differential equation and satisfies the initial conditions, especially important when the differential equation is defined also for since the Laplace transform only makes sense to functions on . However, this verification is unnecessary when is continuous on an open interval containing , as the initial value problem is guaranteed to have a unique local solution.  In the following examples, we apply the Laplace transform method to solve initial value problems.  Solve the initial value problem using the Laplace transform:   on .    Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have      Solve the initial value problem using the Laplace transform:    on .   Applying the Laplace transform to both sides of the equation, we have  Decompose into partial fractions:   Solving for the constants gives   Hence   Now apply the inverse Laplace transform:  Therefore, We can show that is the solution of the initial value problem on by verifying that it satisfies the differential equation and the initial conditions.     Move this to a later section Solve the initial value problem using the Laplace transform:   Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have     The general principle for solving initial value problems by the Laplace transform method remains the same as demonstrated in the previous examples. The major effort to make is in computing the Laplace transforms of more complicated functions and finding inverse transforms of more complicated expressions. In the followings sections, we continue exploring additional methods for computing Laplace transforms and solve initial value problems that involve more complicated functions.    Solve the following initial value problems using the Laplace transform method:              Solve the following initial value problems using the Laplace transform method:            Solve the following initial value problems using the Laplace transform method:    where  where           "
},
{
  "id": "sec-5-2-3",
  "level": "2",
  "url": "sec-5-2.html#sec-5-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential order "
},
{
  "id": "thm-5-2-1",
  "level": "2",
  "url": "sec-5-2.html#thm-5-2-1",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "(Laplace transform of derivatives).",
  "body": " (Laplace transform of derivatives)  Let be a positive integer. If are continuous on and of exponential order as and if is piecewise continuous on and of exponential order as then where .  "
},
{
  "id": "ex-5-2-1",
  "level": "2",
  "url": "sec-5-2.html#ex-5-2-1",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "Solve the initial value problem using the Laplace transform:   on .    Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have    "
},
{
  "id": "ex-5-2-2",
  "level": "2",
  "url": "sec-5-2.html#ex-5-2-2",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": " Solve the initial value problem using the Laplace transform:    on .   Applying the Laplace transform to both sides of the equation, we have  Decompose into partial fractions:   Solving for the constants gives   Hence   Now apply the inverse Laplace transform:  Therefore, We can show that is the solution of the initial value problem on by verifying that it satisfies the differential equation and the initial conditions.   "
},
{
  "id": "ex-5-2-3",
  "level": "2",
  "url": "sec-5-2.html#ex-5-2-3",
  "type": "Example",
  "number": "5.2.4",
  "title": "Move this to a later section.",
  "body": " Move this to a later section Solve the initial value problem using the Laplace transform:   Applying the Laplace transform to both sides of the equation, we have To find the inverse Laplace transform of , we use partial fraction decomposition to write Solving for , we have Thus, Applying the inverse Laplace transform term by term, we have    "
},
{
  "id": "exercises-5-2-1",
  "level": "2",
  "url": "sec-5-2.html#exercises-5-2-1",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method:           "
},
{
  "id": "exercises-5-2-2",
  "level": "2",
  "url": "sec-5-2.html#exercises-5-2-2",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method:          "
},
{
  "id": "exercises-5-2-3",
  "level": "2",
  "url": "sec-5-2.html#exercises-5-2-3",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": " Solve the following initial value problems using the Laplace transform method:    where  where         "
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
  "body": " Laplace Transforms of Periodic Functions  In , we computed the Laplace transforms of the periodic functions and that are continuous. In applications, we also have to address periodic functions that are periodic but piecewise continuous on A function is said to be periodic on if there exists a number called a period of such that Graphically, a periodic function repeats the portion of its graph restricted to across subsequent intervals of the same length .  A piecewise continuous periodic function with a period has the following property: for all positive integers This property is visualized in below.  The graph of .     To compute we express it as an infinite series of integrals as follows: Since the geometric series converges for to we obtain    Let us revisit    Using with , we obtain We compute Hence as expected.  The example above suggests that the direct computation of the Laplace transform of a periodic function may be more convenient.  The example below concerns a periodic function acting as the source term of an initial value problem.   Consider the initial value problem where is given by and for all in    The graph of on is shown below.  The graph of .       Then Taking the Laplace transform of the differential equation, we get With we have Since and it follows that In view of the shifting on the axis property discussed in , the solution of the initial value problem is The graph of this solution is in below. The solution is a piecewise continuous periodic function with period 2, and it converges to the periodic function as   The graph of .        "
},
{
  "id": "fig-piecewise-periodic-1",
  "level": "2",
  "url": "sec-5-4.html#fig-piecewise-periodic-1",
  "type": "Figure",
  "number": "5.4.1",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "sec-5-4-4",
  "level": "2",
  "url": "sec-5-4.html#sec-5-4-4",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": " Let us revisit   "
},
{
  "id": "sec-5-4-8",
  "level": "2",
  "url": "sec-5-4.html#sec-5-4-8",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": " Consider the initial value problem where is given by and for all in   "
},
{
  "id": "fig-piecewise-periodic-2",
  "level": "2",
  "url": "sec-5-4.html#fig-piecewise-periodic-2",
  "type": "Figure",
  "number": "5.4.4",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-piecewise-periodic",
  "level": "2",
  "url": "sec-5-4.html#fig-piecewise-periodic",
  "type": "Figure",
  "number": "5.4.5",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "sec-7-1",
  "level": "1",
  "url": "sec-7-1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Differentiation Under the Integral",
  "body": " Differentiation Under the Integral   Something about differentiating under the integral goes here yes. Testing   Leibniz Rule   Let be a function on a rectangle such that both and are continuous on Then       Leibniz Rule for Improper Integrals   Let be a function on a rectangle such that, for each in both and have improper integrals on and such that, for each in  is differentiable in for each in Suppose, further, that there exists a function on such that for all and for all in and such that is convergent. Then      "
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
  "id": "partial-fraction-decomposition",
  "level": "1",
  "url": "partial-fraction-decomposition.html",
  "type": "Section",
  "number": "6.2",
  "title": "Partial Fraction Decomposition",
  "body": " Partial Fraction Decomposition   Something about partial fraction decomposition goes here yes.   "
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
