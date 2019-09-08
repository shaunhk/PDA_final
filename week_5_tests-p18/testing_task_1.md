### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # Should specify an initialize method with e.g, as follows:
  # attr_accessor :cards
  #
  # def initialize(cards)
  #   @cards = cards
  # end

  def checkforAce(card)
    if card.value = 1 #should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #Should be def, also there should be a comma between the instance card1 and card2
  if card1.value > card2.value #if statement should be indented forward
    return card.name #there is no .name function in card.rb could be return card
  else
    card2 #should be return card2
  end
end
end #end should be moved to the end of the file

def self.cards_total(cards) #should not be a self function, delete self.
  total #total should be made = 0
  for card in cards
    total += card.value
    return "You have a total of" + total #return function should outside for loop, after the end, there should be a space after of and the total should be converted to string (to_s)
  end
end


```
