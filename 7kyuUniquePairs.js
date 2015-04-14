/**
 * 7 kyu: Unique Pairs
 *
 * Mrs. Frizzle is beginning to plan lessons for her science class next semester, and wants to encourage friendship
 * amongst her students. To accomplish her goal, Mrs. Frizzle will ensure each student has a chance to partner with
 * every other student in the class in a series of science projects. Mrs. Frizzle does not know who will be in her class
 * next semester, but she does know she will have n students total in her class.
 * 
 * Specifications
 * 
 * Create the function projectPartners with the parameter n representing the number of students in Mrs. Frizzle's class.
 * The function should return the total number of unique pairs she can make with n students.
 * 
 * projectPartners(2)
 *   --> returns 1
 * 
 * projectPartners(4)
 *   --> returns 6
 */

//my solution
function projectPartners(n) {
  if (n == 2) {
    return 1;
  } else {
    return (n-1) + projectPartners(n-1);
  }
}

//voted for best practice
function projectPartners(n) {
  return n * (n-1) / 2;
}
