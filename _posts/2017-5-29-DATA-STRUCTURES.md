---
layout: post
title: Data Structures
---

We take a lot for granted when first learning to write code, and writely so. I really think it's best to start out just accepting some of the 'magic' built into our languages and frameworks, at least initially. Peaking behind the curtain before you understand the surface-level material can be overwhelming, to say the least.

That said, it is truly fascinating to dig into the nuts and bolts of the basic data structures behind languages like Ruby. Take, for example, Ruby's version of a Hash. Creating, using and manipulating hashes in the Ruby language is fairly straight forward. You can initialize a hash with `myHash = Hash.new` or 'myHash = {}'.  You can add data by writing `myHash = {:first_item => 1, :second_item => 2}` or `myHash = {first_item: 1, second_item: 2}`, among others. You can also easily access a value with its key, as in `myHash[:first_item]` which would return `1`. 

This is all terrific and is part of what makes coding in Ruby the programmer-friendly experience that it is. However, sometimes it's necessary to go deeper, and maybe even re-write some of the rules. I've recently had the opportunity to dig deeper into data structures and re-create some of the structures from scratch that I use on an almost daily basis. I won't detail them all but will show code that I wrote specifically for re-creating Ruby Hash structure. If nothing else, I hope it may give you a deeper appreciation for what's going on beneath the surface of those wonderful Ruby Hashes.
```Ruby
class HashItem
  attr_accessor :key
  attr_accessor :value

  def initialize(key, value)
    @key = key
    @value = value
  end
end

class HashClass
  attr_accessor :items

  def initialize(size)
    @items = Array.new(size)
  end

  def []=(key, value)
    @index = index(key, @items.length)
    if @items[@index].nil?
      @items[@index] = HashItem.new(key, value)
    elsif @items[@index].key == key && @items[@index].value == value
      p "Item already exists"
    elsif @items[@index].key == key && @items[@index].value != value
      resize
      @items[@index].value = value
    else
      resize
      self[key] = value
    end
  end


  def [](key)
    @items[index(key, @items.length)].value
  end

  def resize
    temp_array = @items
    @items = Array.new(temp_array.length * 2)
    temp_array.each do |item|
      unless item.nil?
        self[item.key] = item.value
      end
    end
  end

  def index(key, size)
    key.sum % size
  end

  def size
    @items.length
  end

end
```