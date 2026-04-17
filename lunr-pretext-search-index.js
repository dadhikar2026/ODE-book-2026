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
  "body": " Introduction    The order linear differential equations are of the form   where the functions and are continuous on some interval .   "
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
  "body": " Formulas   Common Laplace Transforms                1.           2.           3.           4.           5.           6.           7.           8.           9.           10.           11.           12.           13.           14.           15.           16.           17.           18.           19.           20.           21.           22.           23.           24.           25.           26.           27.           28.           29.           30.           31.           32.           33.           34.          35.          36.          37.          38.          39.          40.          41.          42.          43.          44.          45.          46.          47.          48.          49.          50.          51.          52.          53.          54.          55.          56.            Derivatives  We use notations and to synonymously denote the derivative of with respect to    Differentiation Rules     Constant:    Constant Multiple:    Sum:    Product:    Quotient:    Chain:    Power:    Power:                                                                  "
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
