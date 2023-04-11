require 'rspec'
require_relative 'book.rb'
require_relative 'library.rb'

#simple anatomy of a test in RSpec
# describe 'Class' do
#   it 'does stuff' do
#     expect    .matcher
#   end
# end

describe 'Book' do

    before :each do
      @book = Book.new
    end
  
  it 'when a book is instantiated' do
    expect{ @book }.not_to raise_error
  end

  it 'has a title' do
    #provide an instance of Book
    # my_book = Book.new
    @book.title = 'Brave New World'
    expect(@book.title).to be_a String
    expect(@book.title).to eq 'Brave New World'
  end

  it 'has an author' do
    # @book = Book.new
    @book.author = 'Aldous Huxley'
    expect(@book.author).to be_a String
    expect(@book.author).to eq 'Aldous Huxley'
  end

  it 'starts on page 1' do
      # @book = Book.new
      expect(@book.page).to eq 1
      expect(@book.page).to be_a Integer
  end

  it 'can read pages' do
    # my_book = Book.new
    expect{ @book.read 5}.to change { @book.page }.from(1).to(6)
  end
end

describe 'Library' do
  it 'has to be real' do
    expect{Library.new}.to_not raise_error
  end

  it 'has an array of books' do
    my_library = Library.new
    expect(my_library.book_collection).to be_a Array
  end

  it 'can add books to the array' do
    brave = Book.new
    hamlet = Book.new
    my_library = Library.new
    my_library.add_books(brave)
    my_library.add_books hamlet
    expect(my_library.book_collection).not_to be_empty
    expect(my_library.book_collection).to contain_exactly(brave, hamlet)
  end
end