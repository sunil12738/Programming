#include <stdio.h>
#include <stdlib.h>

struct node {
	int value;
	struct node *next;
};

//print all the elements of linked list
void printList(struct node *node){
	while(node->next != NULL){
		printf("%d\n", (node->next)->value);
		node = node->next;
	}
}

//reverse linked list
//The program has errors. It does not prints the last element of the linked list.
void reverseList(struct node *n){
	struct node* prevNode = malloc(sizeof(struct node));
	struct node* currNode = malloc(sizeof(struct node));
	struct node* nextNode = malloc(sizeof(struct node));
	//initial
	currNode = n->next;
	while(currNode != NULL){
		printf("%d %d\n", prevNode->value, currNode->value);
		nextNode = currNode->next;
		currNode->next = prevNode;
		prevNode = currNode;
		currNode = nextNode;
	}
	printf("%d\n",nextNode->value );
	printf("printing\n");
	printList(prevNode);
	printf("done\n");
}

//insert element into the linked list
void insert(struct node *node, int value){
	struct node* element = malloc(sizeof(struct node));
	element->value = value;
	while(node->next != NULL){
		node = node->next;
	}
	node->next = element;

}

//delete element of the linked list
void delete(struct node *n, int value){
	while(n->next != NULL){
		if((n->next)->value == value){
			n->next = (n->next)->next;
			return ;
		}
		n = n->next;
	}
}


int main(){
	int n = 0, value;
	printf("enter number of nodes ");
	scanf("%d", &n);
	struct node* head = malloc(sizeof(struct node));
	while(n>0){
		scanf("%d",&value);
		insert(head, value);
		--n;
	}
	// printList(head);
	// reverseList(head);
	// printList(head);

	printf("Enter the value to be deleted ");
	scanf("%d", &value);
	// delete(head, value);
	// printList(head);
	return 0;
}