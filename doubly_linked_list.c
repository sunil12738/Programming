#include <stdio.h>
#include <stdlib.h>

// use namespace std;

struct node {
	int value;
	struct node *left;
	struct node *right;
};

void insert(struct node *n, int value){
	struct node* nextNode = malloc(sizeof(struct node));
	struct node* prevNode = malloc(sizeof(struct node));
	prevNode = n;
	while(n->right != NULL){
		prevNode = n->right;
		n = n->right;
	} 
	nextNode->value = value;
	nextNode->right = NULL;
	nextNode->left = prevNode;
	n->right = nextNode;
}

void delete(struct node *head, int value){
	while(head != NULL){
		if(head->value == value){
			(head->left)->right = (head->right);
			(head->right)->left = (head->left);
		}
		head = head->right;
	}

}


//print to right
void printNext(struct node *head){
	while(head != NULL){
		printf("%d\n", head->value);
		head = head->right;
	}
}

//print to left
void printPrev(struct node *head){
	while(head->right != NULL){
		head = head->right;
	}
	while(head != NULL){
		printf("%d\n", head->value);
		head = head->left;
	}
}

int main(){
	int n, value;//number of nodes
	scanf("%d", &n);
	struct node *head = malloc(sizeof(struct node));
	head->value = 0;
	head->right = NULL;
	head->left = NULL;
	while(n>0){
		printf("Enter the value ");
		scanf("%d", &value);
		insert(head, value);
		--n;
	}
	printNext(head);
	printPrev(head);

	printf("Enter the value to delete\n");
	scanf("%d", &value);
	delete(head, value);
	printNext(head);
	return 0;
}