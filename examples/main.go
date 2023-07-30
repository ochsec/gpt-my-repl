package main

import (
	"fmt"
)

type predicate func(int) bool

func filter(is []int, p predicate) []int {
	out := []int{}
	for _, i := range is {
		if p(i) {
			out = append(out, i)
		}
	}
	return out
}

func createLargerThanPredicate(threshold int) predicate {
	return func(i int) bool {
		return i > threshold
	}
}

var (
	largerThanTwo     = createLargerThanPredicate(2)
	largerThanFive    = createLargerThanPredicate(5)
	largerThanHundred = createLargerThanPredicate(100)
)

func main() {
	ints := []int{1, 2, 3, 5, 8, 13, 21, 34, 55}
	predicates := []predicate{
		largerThanTwo,
		largerThanFive,
		largerThanHundred,
	}
	for _, predicate := range predicates {
		fmt.Printf("%v\n", filter(ints, predicate))
	}
}
